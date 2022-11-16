package com.example.ngo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginCredentials {
    @NotBlank
    @NotNull(message = "please enter valid email address")
    private String email;

    @NotBlank
    @NotNull(message = "please add password")
    private String password;
}
