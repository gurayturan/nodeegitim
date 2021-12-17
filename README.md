# nodeegitim@When("^Turn (wifi|data|connection|airplane|bluetooth) (on|off)$")
    public void settingSwitch(String net, String act) {
        MobileDevice device = mobileSteps.getCurrentDevice();
        AppiumDriver driver = device.getDriver();

        if(driver instanceof AndroidDriver)
        {
            //executeAdbShellCommands(String.format("svc %s %s", net.equals("wifi") ? "wifi" : "data", act.equals("on") ? "enable" : "disable"));
            executeRemoteCommand(String.format("svc %s %s", net.equals("wifi") ? "wifi" : "data", act.equals("on") ? "enable" : "disable"));
        }
        else if(driver instanceof IOSDriver){

            showQuickSettings();

            iSeePageInSeconds(10, "quick settings menu");
            mobileSteps.seePage("quick settings menu");

            Map<String,Integer> switches = new HashMap<String,Integer>();
            switches.put("on", 1);
            switches.put("off", 0);

            String element;

            if(!net.equals("connection"))
                element = net.concat(" mode");
            else{
                String elementConnect = "wifi mode";

                mobileSteps.seeElement(elementConnect);
                boolean condition = device.findElement(elementConnect)
                        .getAttribute("value").equals(switches.get(act).toString());

                if (!condition) {
                    if(device.findElement(elementConnect).isEnabled()){
                        mobileSteps.clickElement(elementConnect);
                        clickIfExists("ok button");
                    }else{
                        LOGGER.info(elementConnect + " cannot be clicked. Continue...");
                    }
                } else{
                    LOGGER.info(elementConnect + " is already enabled. Continue...");
                }
                element = "data mode";
            }

            mobileSteps.seeElement(element);
            boolean condition = device.findElement(element)
                    .getAttribute("value").equals(switches.get(act).toString());

            if (!condition) {
                if(device.findElement(element).isEnabled()){
                    mobileSteps.clickElement(element);
                    clickIfExists("ok button");
                }else{
                    LOGGER.info(net + " mode cannot be clicked. Continue...");
                }
            } else{
                LOGGER.info(net + " mode is already handled. Continue...");
            }

            hideQuickSettings();

            commonSteps.waitForNSeconds(5);
        }//IOS end
    }




@When("^(?:I) hide notification IOS$")
    public void hideNotifications() {
        manageNotifications(false);
        commonSteps.waitForNSeconds(1);
    }

    @Then("^(?:I) open quick settings IOS$")
    public void showQuickSettings() {
        manageQuickSettings(true);
        commonSteps.waitForNSeconds(1);
    }

    @Then("^(?:I) hide quick settings IOS$")
    public void hideQuickSettings() {
        manageQuickSettings(false);
        commonSteps.waitForNSeconds(1);
    }

    private void manageQuickSettings(Boolean show){
        MobileDevice device = mobileSteps.getCurrentDevice();
        AppiumDriver driver = device.getDriver();

        if (driver instanceof IOSDriver) {
            Dimension dimension = driver.manage().window().getSize();
            int yMargin = 5;
            int xThirdQuarter = dimension.width / 8 * 7;
            PointOption top = PointOption.point(xThirdQuarter, yMargin);
            PointOption bottom = PointOption.point(xThirdQuarter, dimension.height - yMargin);
            PointOption move = PointOption.point(xThirdQuarter, dimension.height / 2);
            TouchAction action = new TouchAction(driver);

            float windowDimension = (float)driver.manage().window().getSize().getHeight() / (float)driver.manage().window().getSize().getWidth();
            boolean newPhone = (windowDimension > 1.8f);

            if(!newPhone){
                if (show) {
                    action.press(bottom);
                } else {
                    action.press(top);
                }
            }else{
                if (show) {
                    action.press(top);
                } else {
                    action.press(bottom);
                }
            }
            action.waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)));
            action.moveTo(move);
            action.release();
            action.perform();
            commonSteps.waitForNSeconds(1);
        } else {
            LOGGER.info("Driver is not compatible");
        }
    }

    private void manageNotifications(Boolean show) {
        MobileDevice device = mobileSteps.getCurrentDevice();
        AppiumDriver driver = device.getDriver();

        if (driver instanceof IOSDriver) {
            Dimension dimension = driver.manage().window().getSize();
            int yMargin = 3;
            int xQuarter = dimension.width / 4;
            PointOption top = PointOption.point(xQuarter, yMargin);
            PointOption bottom = PointOption.point(xQuarter, dimension.height - yMargin);

            TouchAction action = new TouchAction(driver);

            if (show) {
                action.press(top);
            } else {
                action.press(bottom);
            }
            action.waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)));
            if (show) {
                action.moveTo(bottom);
            } else {
                action.moveTo(top);
            }

            action.perform();
        } else {
            LOGGER.info("Driver is not compatible");
        }
    }
