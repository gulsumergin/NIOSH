package com.example.demo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class RWLController {

    @GetMapping("/calculateRWL")
    public double calculateRWL(
            @RequestParam double loadConstant,
            @RequestParam double horizontalMultiplier,
            @RequestParam double verticalMultiplier,
            @RequestParam double distanceMultiplier,
            @RequestParam double asymmetricMultiplier,
            @RequestParam double frequencyMultiplier,
            @RequestParam double couplingMultiplier
    ) {
        // NIOSH RWL equation
        double rwl = loadConstant * horizontalMultiplier * verticalMultiplier * distanceMultiplier *
                asymmetricMultiplier * frequencyMultiplier * couplingMultiplier;
        
        return rwl;
    }

    @GetMapping("/calculateLI")
    public double calculateLI(
            @RequestParam double actualWeight,
            @RequestParam double rwl
    ) {
        // Calculate Load Index (LI)
        double li = actualWeight / rwl;
        return li;
    }
}
