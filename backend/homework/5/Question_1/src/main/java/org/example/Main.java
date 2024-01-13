package org.example;

public class Main {
    public static void main(String[] args) {
        MessageQueue messageQueue = new MessageQueue();

        Thread[] senders=new Thread[3];
        Thread[] receivers=new Thread[3];

        for(int i=0;i<3;i++){
            senders[i]= new Thread(new MessageSender(messageQueue));
            senders[i].setName(String.format("Thread number: %d",i));
            senders[i].start();
        }

        for(int i=0;i<3;i++){
            receivers[i]= new Thread(new MessageReceiver(messageQueue));
            String temp="Thread number:"+i;
            receivers[i].setName(temp);
            receivers[i].start();
        }

    }
}