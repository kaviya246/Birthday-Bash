    package com.example.birthdayback.mapper;

    import com.example.birthdayback.dto.DecorationDto;
    import com.example.birthdayback.entity.Decoration;

    public class DecorationMapper{
        
        public static DecorationDto mapToDecorationDto(Decoration decoration)
        {
            return  new DecorationDto(
                decoration.getId(),
                decoration.getName(),
                decoration.getTheme(),
                decoration.getAmount(),
                decoration.getImageUrl()
            );
        }

        public static Decoration mapToDecoration(DecorationDto decorationDto)
        {
            return new Decoration(
                decorationDto.getId(),
                decorationDto.getName(),
                decorationDto.getTheme(),
                decorationDto.getAmount(),
                decorationDto.getImageUrl()
            );
        }
    }
