package com.example.demo.services;

import com.example.demo.model.Score;
import com.example.demo.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ScoreService {

    @Autowired ScoreRepository scoreRepository;

    public ScoreService() {
    }

    public List<Score> getScores(){
        return scoreRepository.findAll(Sort.by(Sort.Direction.DESC, "score"));
    }


    public List<Score> topScores(){
        List<Score> topscores =  scoreRepository.findAll(Sort.by(Sort.Direction.ASC, "score"));
        List<Score> bottommost = new ArrayList<Score>();
        bottommost.add(topscores.get(0));
        return bottommost;
    }
    
    
    public Score saveScore(Score score) {
        return scoreRepository.save(score);
    }


    public void deleteScore(Score score) {
        scoreRepository.deleteById(score.getId());
    };
}
