package com.example.ngo.controller;


import com.example.ngo.entity.AppUser;
import com.example.ngo.exception.UserNotFoundException;
import com.example.ngo.model.LoginCredentials;
import com.example.ngo.service.AppUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;


@RestController
@RequestMapping
@RequiredArgsConstructor
@Slf4j
public class AppUserController {
    private final AppUserService userService;

    @PostMapping( "/user")
    public ResponseEntity<AppUser> registerUser(@RequestBody AppUser appUser){
        log.debug("REST request to create AppUser ");
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/user").toUriString());

        return  ResponseEntity.created(uri).body(userService.registerUser(appUser));

    }

    @GetMapping("/userLogin")
    public ResponseEntity<String> searUserByEmail(@RequestBody LoginCredentials credentials)
            throws UserNotFoundException {
        return ResponseEntity.ok().body(userService.searUserByEmail(credentials));
    }

}
