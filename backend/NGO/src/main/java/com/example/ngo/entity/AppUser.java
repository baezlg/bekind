package com.example.ngo.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long appUserId;

    @NotBlank
    @NotNull(message = "please add firstName")
    private String firstName;

    @NotBlank
    @NotNull(message = "please add LastName")
    private String lastName;

    @NotBlank
    @NotNull(message = "please enter valid email address")
    private String email;

    @NotBlank
    @NotNull(message = "please add password")
    private String password;

    @Column(name = "created_at", nullable = false)
    @CreationTimestamp
    private LocalDate createdAt;

    private boolean isAdmin;
}
