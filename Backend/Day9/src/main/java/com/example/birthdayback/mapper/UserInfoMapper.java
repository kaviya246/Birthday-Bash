package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.UserInfoDto;
import com.example.birthdayback.entity.UserInfo;

// import com.example.birthdayback.dto.UserInfoDto;
// import com.example.birthdayback.entity.User;

// public class UserInfoMapper {
    
//     public static UserInfoDto mapToUserDto(User user)
//     {
//         return new  UserInfoDto(
//             user.getId(),
//             user.getName(),
//             user.getPassword()
//         );
//     }

//     public  static User mapToUser(UserInfoDto userDto)
//     {
//         return new User(
//             userDto.getId(),
//             userDto.getName(),
//             userDto.getPassword()
//         );
//     }
// }


public class UserInfoMapper {

    public static UserInfoDto mapToUserInfoDto(UserInfo userInfo) {
        UserInfoDto userInfoDto = new UserInfoDto();
        userInfoDto.setId(userInfo.getId());
        userInfoDto.setName(userInfo.getName());
        userInfoDto.setEmail(userInfo.getEmail());
        userInfoDto.setPassword(userInfo.getPassword());
        userInfoDto.setRoles(userInfo.getRoles());
        return userInfoDto;
    }

    public static UserInfo mapToUserInfo(UserInfoDto userInfoDto) {
        UserInfo userInfo = new UserInfo();
        userInfo.setId(userInfoDto.getId());
        userInfo.setName(userInfoDto.getName());
        userInfo.setEmail(userInfoDto.getEmail());
        userInfo.setPassword(userInfoDto.getPassword());
        userInfo.setRoles(userInfoDto.getRoles());
        return userInfo;
    }
}