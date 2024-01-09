package org.example.org3;
import org.example.Logg;

//import java.util.logging.Logger;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//import java.util.logging.Logger;

public class APIResponseParser {
    /**
     * Parses the input text and returns a Book instance containing
     * the parsed data.
     * @param response text to be parsed
     * @return Book instance containing parsed data
     */

    private static  String parse(String response, String startRule, String endRule){
        int pos=response.indexOf(startRule);
        int start=pos+startRule.length();
        int end=response.indexOf(endRule,start);
        return response.substring(start,end);

    }


    public static Book parse(String response) {
        Book book = new Book();
        String endRule = "<";
        String startRule = "<title>";
        String title = parse(response, startRule, endRule);
        book.setTitle(title);
// Your code

        String Author_name= parse(response,"<name>","<");
        book.setAuthor(Author_name);

        String Publication_year = parse(response,"<original_publication_year type=\"integer\">","<");
        String Publication_year_WithoutCommas = Publication_year.replace(",", "");
        int Publication_yr = Integer.parseInt(Publication_year_WithoutCommas);
        book.setPublicationYear(Publication_yr);

        String Avg_rating = parse(response,"<average_rating>","<");
//        String stringWithoutCommas = Avg_rating.replace(",", "");
        double Avg_rat=Double.parseDouble(Avg_rating);
        book.setAverageRating(Avg_rat);

        String Ratings_count = parse(response,"<ratings_count type=\"integer\">","<");
        String Ratings_count_WithoutCommas = Ratings_count.replace(",", "");
        int Rat_count = Integer.parseInt(Ratings_count_WithoutCommas);
        book.setRatingsCount(Rat_count);

        String image_url = parse(response,"<image_url>","<");
        book.setImageUrl(image_url);


//        public static final Logger logger =  LoggerFactory.getLogger(APIResponseParser.class);
        Logg.logger.info("Details of book object:");
        Logg.logger.info("Book title:" + book.getTitle());
        Logg.logger.info("Author name:" + book.getAuthor());
        Logg.logger.info("Publication_year:" + book.getPublicationYear());
        Logg.logger.info("Average Rating:" + book.getAverageRating());
        Logg.logger.info("Rating Count:" + book.getRatingsCount());
        Logg.logger.info("Image Url:"+ book.getImageUrl());

        return book;
    }
// write overloaded parse method with the 3 parameters response startRule, endRule
    public static void main(String[] args) {

        String response = "<work>\n" +
                "<id type=\"integer\">2361393</id>" +
                "<books_count type=\"integer\">813</books_count>\n" +
                "<ratings_count type=\"integer\">1,16,315</ratings_count>\n" +
                "<text_reviews_count type=\"integer\">3439</text_reviews_count> " +
                "<original_publication_year type=\"integer\">1854</original_publication_year>" +
                "<original_publication_month type=\"integer\" nil=\"true\"/> " +
                "<original_publication_day type=\"integer\" nil=\"true\"/>" +
                "<average_rating>3.79</average_rating>\n" +
                "<best_book type=\"Book\">\n" +
                "<id type=\"integer\">16902</id> <title>Walden</title> <author>\n" +
                "<id type=\"integer\">10264</id>\n" +
                "<name>Henry David Thoreau</name> </author>\n" +
                "<image_url>http://images.gr-assets.com/books/1465675526m/16902.jpg</image_url>\n" +
                "<small_image_url>http://images.gr-assets.com/books/1465675526s/16902.jpg</small\n" +
                "</small_image_url>\n" +
                "</best_book>\n" +
                "</work>";

        APIResponseParser.parse(response);
    }
}