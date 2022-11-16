package com.example.ngo.service;

import com.example.ngo.entity.AppUser;
import com.example.ngo.exception.UserNotFoundException;
import com.example.ngo.model.LoginCredentials;

public interface AppUserService {
    AppUser registerUser (AppUser appUser);

    String searUserByEmail (LoginCredentials credentials) throws UserNotFoundException;
}

