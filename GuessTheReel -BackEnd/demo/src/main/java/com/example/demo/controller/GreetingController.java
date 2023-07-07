package com.example.demo.controller;

import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Arrays;
import java.util.Random;


@RestController
public class GreetingController {

    @Autowired
    RestTemplate restTemplate;


    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String getGreeting() {
        return "THIS IS TEST OF JAVA SPRING BOOT";
    }


    @RequestMapping(value = "/random-movies")
    public String[] getMovies() {

        HttpHeaders headers = new HttpHeaders();
        headers.add("accept", "application/json");
        headers.add("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODBhNGMyZmUxZGEwNmM5MDViOWJlMzNmODg0NDQwYSIsInN1YiI6IjY0NDRjYjk0ZDM4YjU4MDRjZDExOGM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GzATNHO19qp_CJ8e-ErgAeHXluTXUlLM_r0JV6uhlng");
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<String>(headers);

        String Data = restTemplate.exchange("https://api.themoviedb.org/3/movie/100?language=en-US", HttpMethod.GET, entity, String.class).getBody();
        String DataTwo = restTemplate.exchange("https://api.themoviedb.org/3/movie/99?language=en-US", HttpMethod.GET, entity, String.class).getBody();
        String DataThree = restTemplate.exchange("https://api.themoviedb.org/3/movie/98?language=en-US", HttpMethod.GET, entity, String.class).getBody();
        String DataFour = restTemplate.exchange("https://api.themoviedb.org/3/movie/125?language=en-US", HttpMethod.GET, entity, String.class).getBody();

        return new String[]{Data, DataTwo, DataThree, DataFour};
    }

    @RequestMapping(value = "/api/random-movies-1")
    public String getMovies1() throws IOException, InterruptedException {

        Random rand = new Random();
        int rand_int = rand.nextInt(30000);


        String str = Integer.toString(rand_int);
        String callString = String.format("https://api.themoviedb.org/3/movie/%s?language=en-US", str);


        System.out.println(rand_int);
        System.out.println(callString);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(callString))
                .header("accept", "application/json")
                .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODBhNGMyZmUxZGEwNmM5MDViOWJlMzNmODg0NDQwYSIsInN1YiI6IjY0NDRjYjk0ZDM4YjU4MDRjZDExOGM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GzATNHO19qp_CJ8e-ErgAeHXluTXUlLM_r0JV6uhlng")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());

        return response.body();

    }

}
