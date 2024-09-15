package org.example;
import java.util.logging.Logger;

import static java.lang.Math.sqrt;

public class Factors extends Thread{
    private int number;
    Logger logger=Logger.getLogger(Factors.class.getName());
    public Factors(int number){
        this.number=number;
    }
    @Override
    public void run(){

        for (int i=1; i<=sqrt(number); i++)
        {
            if (number%i == 0)
            {
                // If divisors are equal, print only one
                if (number/i == i)
                    logger.info(i + " ");

                else // Otherwise print both
                    logger.info(" "+ i + " " + number/i);
            }
        }

    }
}