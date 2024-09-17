package org.example.org3;

public class Book {
    private String title;
    private String author;
    private int publicationYear;
    private double averageRating;
    private int ratingsCount;
    private String imageUrl;
// Add getters & setters for author, averageRating, and ratingsCount
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public int getPublicationYear() {
        return publicationYear;
    }
    public void setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setAuthor(String author){
        this.author=author;
    }

    public String getAuthor(){
        return this.author;
    }


    public double getAverageRating(){
        return this.averageRating;
    }
    public void setAverageRating(double averageRating){
        this.averageRating=averageRating;
    }


    public int getRatingsCount(){
        return this.ratingsCount;
    }

    public void setRatingsCount(int ratingsCount){
        this.ratingsCount=ratingsCount;
    }
}