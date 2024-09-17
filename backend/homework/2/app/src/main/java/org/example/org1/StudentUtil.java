package org.example.org1;

import org.example.Logg;

public class StudentUtil {
    public static double[] calculateGPA(int[] studentIdList, char[][]
            studentsGrades) {
// your code
        int n=studentIdList.length;
        double[] Studentgpa=new double[n];
        for(int i=0;i<n;i++){
            double ans=0;
            for(int j=0;j<studentsGrades[i].length;j++){
                if(studentsGrades[i][j]=='A') ans+=4;
                else if(studentsGrades[i][j]=='B') ans+=3;
                else ans+=2;
            }
            Studentgpa[i]=(ans/studentsGrades[i].length);
        }
        return Studentgpa;
    }
    public static int[] getStudentsByGPA(double lower, double higher, int[]
            studentIdList, char[][] studentsGrades) {
// perform parameter validation. Return null if passed parameters are
       // not valid
// invoke calculateGPA
// construct the result array and return it. You would need an extra
    //    for loop to compute the size of the resulting array
        if(lower>higher || lower<0 || higher<0){
            Logg.logger.info("Please Enter valid parameters");
            return null;
        }
        int size=0;
        double[] StudentGpa = calculateGPA(studentIdList,studentsGrades);
        for(int i=0;i<studentIdList.length;i++){
            if(StudentGpa[i]>=lower && StudentGpa[i]<=higher) size++;
        }
        int[] studentList=new int[size];
        int counter=0;

        for(int i=0;i<studentIdList.length;i++){
            if(StudentGpa[i]>=lower && StudentGpa[i]<=higher){ studentList[counter++]=studentIdList[i];}
        }

        return studentList;
    }
}