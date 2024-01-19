package org.example;

import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.

public class Main {


    public static void main(String[] args) throws FileNotFoundException {

//        ArrayList<ArrayList<String> > a =
//                new ArrayList<ArrayList<String> >(8);

        ArrayList<String> csk=new ArrayList<>();
        ArrayList<String> pbks=new ArrayList<>();
        ArrayList<String> srh=new ArrayList<>();
        ArrayList<String> rcb=new ArrayList<>();
        ArrayList<String> dc=new ArrayList<>();
        ArrayList<String> rr=new ArrayList<>();
        ArrayList<String> mi=new ArrayList<>();
        ArrayList<String> kkr=new ArrayList<>();


/*
0- csk
1- PBKS
2- SRH
3 - RCB
4 - DC
5 - RR
6 - MI
7 - KKR



 */


//        String cskbowler="";
//        String pbksbowler="";
//        String srhbowler="";
//        String rcbbowler="";
//        String dcbowler="";
//        String rrbowler="";
//        String mibowler="";
//        String kkrbowler="";








        String IPL_2021= "/home/hp/Downloads/IPL_2021-data.csv";
        BufferedReader br = null;
        HashMap<String, ArrayList<String>> playerswithwickets= new HashMap<>();


//        String cskbatsman="";
//        String pbksbatsman="";
//        String srhbatsman="";
//        String rcbbatsman="";
//        String dcbatsman="";
//        String rrbatsman="";
//        String mibatsman="";
//        String kkrbatsman="";
        try {
            File file = new File(IPL_2021);
            FileReader fr = new FileReader(file);
            br = new BufferedReader(fr);
            String line = "";
            String[] headerLine = br.readLine().split(",");
            String[] individualField;
//            line = br.readLine();
            while ((line = br.readLine()) != null) {
                individualField = line.split(",");
                players p = new players();
                teams t= new teams();
                p.setName(individualField[0]);
                p.setTeam(individualField[1]);
                t.setTeamname(individualField[1]);
                p.setRole(individualField[2]);
                p.setMatches(Integer.parseInt(individualField[3]));
                p.setRuns(Integer.parseInt(individualField[4]));
                p.setAverage(Double.valueOf(individualField[5]));
                p.setSR(Double.valueOf(individualField[6]));
                p.setWickets(Integer.parseInt(individualField[7]));
                if(p.getWickets()>=40){
                    if(p.getTeam()=="CSK"){
                        csk.add(p.getName());
                    }
                    else if(p.getTeam()=="PBSK"){
                        pbks.add(p.getName());
                    }
                    else if(p.getTeam()=="SRH"){
                        srh.add(p.getName());
                    }
                    else if(p.getTeam()=="RCB"){
                        rcb.add(p.getName());
                    }
                    else if(p.getTeam()=="DC"){
                        dc.add(p.getName());
                    }
                    else if(p.getTeam()=="RR"){
                        rr.add(p.getName());
                    }
                    else if(p.getTeam()=="MI"){
                        mi.add(p.getName());
                    }
                    else if(p.getTeam()=="KKR"){
                        kkr.add(p.getName());
                    }
                }
                HashMap<String,players> highestbowler= new HashMap<>();

                if(p.getTeam()=="CSK"){
                    if(highestbowler.containsKey("CSK")){
                        players temp=highestbowler.get("CSK");
                        if(p.getWickets()>temp.getWickets()){
                            highestbowler.replace("CSK",p);
                        }
                    }
                    else{
                        highestbowler.put("CSK",p);
                    }
                }

                else if(p.getTeam()=="PBKS"){
                    if(highestbowler.containsKey("PBKS")){
                        players temp=highestbowler.get("PBKS");
                        if(p.getWickets()>temp.getWickets()){
                            highestbowler.replace("PBKS",p);
                        }
                    }
                    else{
                        highestbowler.put("PBKS",p);
                    }
                }


                else if(p.getTeam()=="SRH"){
                    if(highestbowler.containsKey("SRH")){
                        players temp=highestbowler.get("SRH");
                        if(p.getWickets()>temp.getWickets()){
                            highestbowler.replace("SRH",p);
                        }
                    }
                    else{
                        highestbowler.put("SRH",p);
                    }
                }


                else if(p.getTeam()=="RCB"){
                    if(highestbowler.containsKey("RCB")){
                        players temp=highestbowler.get("RCB");
                        if(p.getWickets()>temp.getWickets()){
                            highestbowler.replace("RCB",p);
                        }
                    }
                    else{
                        highestbowler.put("RCB",p);
                    }
                }


                else if(p.getTeam()=="DC"){
                    if(highestbowler.containsKey("DC")){
                        players temp=highestbowler.get("DC");
                        if(p.getWickets()>temp.getWickets()){
                            highestbowler.replace("DC",p);
                        }
                    }
                    else{
                        highestbowler.put("DC",p);
                    }
                }


                else if(p.getTeam()=="RR"){
                    if(highestbowler.containsKey("RR")){
                        players temp=highestbowler.get("RR");
                        if(p.getWickets()>temp.getWickets()){
                            highestbowler.replace("RR",p);
                        }
                    }
                    else{
                        highestbowler.put("RR",p);
                    }
                }


                else if(p.getTeam()=="MI"){
                    if(highestbowler.containsKey("MI")){
                        players temp=highestbowler.get("MI");
                        if(p.getWickets()>temp.getWickets()){
                            highestbowler.replace("MI",p);
                        }
                    }
                    else{
                        highestbowler.put("MI",p);
                    }
                }


                if(p.getTeam()=="KKR"){
                    if(highestbowler.containsKey("KKR")){
                        players temp=highestbowler.get("KKR");
                        if(p.getWickets()>temp.getWickets()){
                            highestbowler.replace("KKR",p);
                        }
                    }
                    else{
                        highestbowler.put("KKR",p);
                    }
                }
//                    t.setPlayerswithwickets(p.getName());
                }

            } catch (IOException ex) {
            throw new RuntimeException(ex);
        }

    }


        menudrivenfunctions md= new menudrivenfunctions();



    }