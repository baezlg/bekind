package com.example.ngo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "post")
public class Post {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private long  postId;
   private String title;

   @OneToOne
   @JoinTable(name= "post",
           joinColumns = {
               @JoinColumn(name = "post_id")
           },
           inverseJoinColumns = {
              @JoinColumn(name = "picture_id")
           }
   )
   private Picture picture;

   private String content;

   @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
   private LocalDateTime createdAt;

   @JsonIgnore
   @ManyToOne
   @JoinColumn(name = "app_user")
   private AppUser currentUser;


}
