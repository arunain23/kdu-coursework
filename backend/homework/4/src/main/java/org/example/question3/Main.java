package org.example.question3;

import java.util.*;
import java.util.logging.Logger;

public class Main {
    private static final Logger logger = Logger.getLogger(org.example.question3.Main.class.getName());

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        Integer[] array = {5,3,6,3,6};

        logger.info("Original Array :");
        printArr(array);
        logger.info("Enter the first index :");
        int firstIndex = scanner.nextInt();
        logger.info("Enter the second index :");
        int secondIndex = scanner.nextInt();
        Exchange exchange = new Exchange();
        exchange.swap(array, firstIndex, secondIndex);
        logger.info("Modified Array :");
        printArr(array);
    }

    public static <T> void printArr(T[] array){
        for(T element : array){
            logger.info("%s ".formatted(element));
        }
    }
}