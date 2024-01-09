package org.example.org2;

import org.example.Logg;

import java.util.Arrays;
//import java.util.HashMap;
//import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class SentimentAnalyzer {
    // Tip: labeled continue can be used when iterating featureSet + convert review to lower-case


    public static String removeSpecialCharacters(String input) {
        // Use regular expression to remove special characters
        return input.replaceAll("[^a-zA-Z0-9\\s]", "");
    }
    public static int[] detectProsAndCons(String review, String[][]
            featureSet, String[] posOpinionWords,  String[] negOpinionWords) {
        Logg.logger.info("SetimentAnalyzer started");
        int[] featureOpinions = new int[featureSet.length]; // output your code ~ you will be invoking getOpinionOnFeature

        String resultString = removeSpecialCharacters(review);
        String finalstring =resultString.toLowerCase();
        for(int i=0;i<featureSet.length;i++){
            featureOpinions[i]=0;
            for(int j=0;j<featureSet[i].length;j++){
                int val=getOpinionOnFeature(finalstring,featureSet[i][j],posOpinionWords,negOpinionWords);
                if(val==-1 || val==1){ featureOpinions[i]=val; break;}
            }

        }



        return featureOpinions;
    }
// First invoke checkForWasPhrasePattern and if it cannot find an opinion only then invoke checkForOpinionFirstPattern
    private static int getOpinionOnFeature(String review, String feature,
                                           String[] posOpinionWords, String[] negOpinionWords) { // your code
        int val=checkForWasPhrasePattern(review,feature,posOpinionWords,negOpinionWords);
        if(val==0) return CheckForOpinionFirstPattern(review,feature,posOpinionWords,negOpinionWords);
        return val;
    }


    // Tip: Look at String API doc. Methods like indexOf, length, substring(beginIndex), startsWith can come into play
// Return 1 if positive opinion found, -1 for negative opinion, 0 for no opinion
    // You can first look for positive opinion. If not found, only then you can look for negative opinion
    private static int checkForWasPhrasePattern(String review, String
            feature, String[] posOpinionWords, String[] negOpinionWords) {
        int opinion = 0;

        String pattern = feature + " was ";
// your code
        int lastindex= review.lastIndexOf(pattern);
        lastindex+=pattern.length();
        String OpinionWord="";
        while(lastindex<review.length() && review.charAt(lastindex)!=' '){ OpinionWord+=review.charAt(lastindex); lastindex++;}

        for(String v:posOpinionWords){
            if(OpinionWord.equals(v)) return 1;
        }
        for(String v:negOpinionWords){
            if(OpinionWord.equals(v)) return -1;
        }
        return opinion;
    }
    // You can first look for positive opinion. If not found, only then you can look for negative opinion


    public static String extractPreviousWord(String sentence, String targetWord) {
        String[] words = sentence.split("\\s+");

        for (int i = 1; i < words.length; i++) {
            if (words[i].equals(targetWord)) {
                return words[i - 1];
            }
        }

        return null; // Target word not found or it is the first word in the sentence
    }

    private static int CheckForOpinionFirstPattern(String review, String
            feature, String[] posOpinionWords,
                                                   String[] negOpinionWords) {
// Extract sentences as feature might appear multiple times.
// split() takes a regular expression and "." is a special character for regular expression. So, escape it to make it work!!
        String[] sentences = review.split("\\.");
        int opinion = 0;
// your code for processing each sentence. You can return if opinion is found in a sentence (no need to process subsequent ones)
        for(int i=0;i<sentences.length;i++){
            String previousWord = extractPreviousWord(sentences[i], feature);
            if(previousWord==null) continue;
            for(String v:posOpinionWords){
                if(previousWord.equals(v)) return 1;
            }
        }

        for(int i=0;i<sentences.length;i++){
            String previousWord = extractPreviousWord(sentences[i], feature);
            if(previousWord==null) continue;
            for(String v:negOpinionWords){
                if(previousWord.equals(v)) return -1;
            }
        }

        return opinion;
    }
    public static void main(String[] args) {
        String review = "Haven't been here in years! Fantastic  service and the food was delicious! Definetly will be a frequent flyer!  Francisco was very attentive";
//String review = "Sorry OG, but you just lost some loyal customers. Horrible service, no smile or greeting just attitude.
// The breadsticks were stale and burnt, appetizer was cold and the food came out before the salad.";
        String[][] featureSet = {
                { "ambiance", "ambience", "atmosphere", "decor" },
                { "dessert", "ice cream", "desert" },
                { "food" },
                { "soup" },

                { "service", "management", "waiter", "waitress",
                        "bartender", "staff", "server" } };
        String[] posOpinionWords = { "good", "fantastic", "friendly",
                "great", "excellent", "amazing", "awesome",
                "delicious" };
        String[] negOpinionWords = { "slow", "bad", "horrible",
                "awful", "unprofessional", "poor" };
        int[] featureOpinions = detectProsAndCons(review, featureSet,
                posOpinionWords, negOpinionWords);
        System.out.println("Opinions on Features: " +
                Arrays.toString(featureOpinions));
    }
}