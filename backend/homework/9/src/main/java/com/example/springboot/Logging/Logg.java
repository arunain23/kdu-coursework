package com.example.springboot.Logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
public class Logg{
    Logg(){}
    public static final Logger log = LoggerFactory.getLogger(Logg.class);
    @Profile("Dev")
    public static void logTrace(String message) {
        log.trace(message);
    }
    @Profile("Dev")
    public static void logDebug(String message) {
        log.debug(message);
    }
    @Profile("Prod")
    public static void logInfo(String message) {
        log.info(message);
    }
    @Profile("Prod")
    public static void logWarn(String message) {
        log.warn(message);
    }
    @Profile("Prod")
    public static void logError(String message) {
        log.error(message);
    }
}