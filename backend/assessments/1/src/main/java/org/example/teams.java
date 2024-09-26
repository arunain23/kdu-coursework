package org.example;

import java.util.ArrayList;

public class teams {
    String teamname;
    Integer wickets;
//    ArrayList<String> CSK;
//    ArrayList<String> PBSK;
//
//    ArrayList<String> PBSK;
//    ArrayList<String> PBSK;
//    ArrayList<String> PBSK;
//    ArrayList<String> PBSK;


    public  void setTeamname(String teamname){
        this.teamname=teamname;
    }
    public  String getTeamname(){
        return this.teamname;
    }

    public void setPlayerswithwickets(String name){
        playerswithwickets.add(name);
    }


    public ArrayList<String> getPlayerswithwickets(){
        for(String a: playerswithwickets){
            System.out.println(a);
        }
    }





}
