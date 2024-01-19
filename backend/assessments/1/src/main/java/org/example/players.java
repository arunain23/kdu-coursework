package org.example;

public class players {
    String name;
    String team;
    String role;
    Integer matches;
    Integer runs;
    double average;
    double SR;
    Integer wickets;
    public  void setName(String name){
        this.name=name;
    }
    String getName(){
        return this.name;
    }
    
    
    void setTeam(String team){
        this.team= team;
    }
    
    String getTeam(){
        return this.team;
    }
    
    void setRole(String role){
        this.role=role;
    }
    
    String getRole(){
        return this.role;
    }
    
    
    void setMatches(Integer matches){
        this.matches=matches;
    }
    
    Integer getMatches(){
        return this.matches;
    }
    void setRuns(Integer runs){
        this.runs=runs;
    }
    
    Integer getRuns(){
        return this.runs;
    }
    
    void setAverage(double average){
        this.average=average;
    }
    
    double getAverage(){
        return this.average;
    }
    
    
    void setWickets(Integer wickets){
        this.wickets=wickets;
    }
    Integer getWickets(){
        return this.wickets;
    }
    
    void setSR(double SR){
        this.SR=SR;
    }
    
    double getSR(){
        return this.SR;
    }
    
    
    
    
    
    
}
