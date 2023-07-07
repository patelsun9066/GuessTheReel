package com.example.demo.controller;


import com.example.demo.model.Score;
import com.example.demo.repository.ScoreRepository;
import com.example.demo.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ScoreController {

    @Autowired ScoreService scoreService;

    @GetMapping("/api/get-all-scores")
    public List<Score> getAllScores(){
        return scoreService.getScores();
    }

    @PostMapping("/api/add-new-score")
    public Score SaveScore(@RequestBody Score score){
        return scoreService.saveScore(score);
    }

    @DeleteMapping("/api/delete-score-id")
    public void DeleteScore(@RequestBody Score score) {
        scoreService.deleteScore(score);
    }
}
