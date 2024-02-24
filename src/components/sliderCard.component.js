import React from 'react';
import Slider from "react-slick";
import SliderCard from './sliderCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid';
const SliderCardComponent = () => {
    const items = [
        { name: 'Dubau Hills Estate',image: 'https://s3-alpha-sig.figma.com/img/3138/056d/2d599e21f2a3faf2bf1c4ef79cdc52c8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LIXlY90QNB2Rawp3A61uCSQstCfnQsoHVZclWS~ntQ3nTQKNJbUY53u-N-9GkN8CyZqmA~kIoO~1grUGKm5YQxxkvo3W2LLLsXhZgVscMciFj4Mh1zdlTa1QnTWQrt-6clxG2XpMfEBmx3SnVklWR4ZBfX5jm5JcxcWVyLpHGszy6CuJqSEC6CZ2U177mFGBR6hVtJFRD881L9-8xS01ciRU3pcKSugHPdfMMCcMwJqfWMnUFiTbMzAfghWzOI~5r5Eu-8tU5h1InbFop0Pa6thfeWJvomYxSVTT55h-6fIF5gPYeaHLRsUf0n17sCfFDqb1exitYDlOc4qVkczrRA__'},
        { name: 'Dubai Marina',image:'https://s3-alpha-sig.figma.com/img/3d34/4548/b6df34bfaa48568da34d8f96e053846b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OkcJ4HZJu13YTAcB5oluNg72zTC1FID~VGSn9R78HKLqdKYoRY2Ga1XMjyo4eM2vYsmF2wH8BKWCZ2Ug0kvY~mASjVz~pQCnckU4Pl-i8trbBJ5tic897fediJuKdPuPDBI~xoAXI4FCtl8WFOJEP0zNx9CEpJekdYpr26rDiJH6njochEJqGIbCuwsScA3Db1FdHSNcuPutdSdXDrX-j0HKq25YNXjrB6h65emKBk0xaMEgi4bz0rPy9QMfmJ58jSLErKYloBB5NmqZyutSfo7JNh7yREiJQT6~h81d5KuvkspBLsT2z9WlptGr25BZtSetsmgjStpzc6Pki9fXJg__'},
        { name: 'Emirates Living ',image:'https://s3-alpha-sig.figma.com/img/ddef/46d0/f1ffb41189afefa603d67a2483169754?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JEtrpvYh2DMQUTN6DC4iU3RFzEzVc7XQ-o6t8bXmLoRNknmDu3lfL1Z9BZEk37WSOB7uv8aSYpVhjb3v6diYobODZHq8oQ9fF-eP1z6UWyBvvem~tajdGVqtXLpFzc~j1H8iBNCpbJ-~-NGWhtpdoJqQoXsmzQZrlTsyH8j6qlXkIcadG0cny4z3SZPBN125uBmyv3UulZrOe3EW30WnD~us~zISl5CXNYFC~iTf1vCyxKqgSw68IQNRYi0Lr6YHcd4uDq2BjHgKpvexWhAAbxecVF63CqX~cmixdpPPJ2TOxZWX403cnX-prHaLBQCKMkop11eBl2jFNPX-e38kEw__'},
        { name: 'Arabian Ranches ',image:'https://s3-alpha-sig.figma.com/img/63d7/ee76/d8f29a63cbe6ca2632d60940409e2b8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hX77PQFOaAnRsxSmbt7xgA8gNmijYc3D6eTe2XMrKNj4zDR1hSHtR8MpHoqCLDQvTmLjIQsSnQucBPp3X9QcfCCqeDeGamYDy1LollDjfMOK5jb0-kO1g35qoQtVcSXmXK5cDTb2R-C7kKH-QOFizKY-8JL4r-Z7BF1gHGQFLamGaGQM2qRXP5~RL8~VJgMYQtfmo89WSn-5eAJKf8dG36YzDC0XlI-pWYaImFF8mPZo0Yq6ia2Q7I27LvDFGEHR8cbANVWhipCvoHyvy7~Di8KbyLP13ejLmSQkKk6lpnCMUc~b2UZYKOzucgWD69aI9w2y0gHw8UvoRQO9ooDkdQ__'},
        {name: 'Arabian Ranches II ', image:'https://s3-alpha-sig.figma.com/img/558d/33b9/23b61b111163c0357ee96e0aa9e335ab?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qq1hpcrgrfi58kSJ3YMVug2CStrQuWozAdwfNxYnJYMqNs4LmbF7wWzdBXqk3~nrAydyGA0uRpDpspEn7gOyd60vwvEeBqdUty7aPwnUPw0CkTHPKp44rxy4HfJp9KfytV5NH3jrbe8WifyLz4lMZGy2NTeD6RiHstgmKDgzIcdL7Pi28wBzWtJGr9wUSct0AdZ--EEUa4eH2LrTmnt9xpPfMwWrA2G3jZtEbjkRf3nsEe3VNAsrb~ZMMnNn6YJCPlOqAUpcv-eTW8b1~HI7PFzJdigGjXGYv6O10vI6E8s0opbGRLnTBZLka7~6ofR5AjrnzzEPmMEJ0PTPsUGE0A__'},
        {name: 'Downtown Dubai ', image:'https://s3-alpha-sig.figma.com/img/a94f/d875/9b7a3750cfb0c9acea21af96b5346b8a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rr0EEzHoBN36R~wtGRPnRwUi7e9PwOkbV3LKWm1jINtE44qyGMrnEfCeElgBLuvRgGEKVbA1DG4wjVm~wpAfvbdeZBxa-3KZh0~zDD-uxgC5Wm9KiI8ZhfLGVu9qtIYXUT41JeEO2iax2GS2F6evM9l8PaXGRXO6eQSviAIj9ib-uEy5r8I8Y3BRisoDBGwDrEol78RZHfitEonJV3l1EEqft9F2dSRLVX0niY4w9i81FTH2b75NO9d7BykNf~eroimjeXXcIVnx-oKPGjEIthixUyAK6jaQuEcLQh3IuVNliq4L8MiFlND1P3eICJigIJyGpRNLwGaFF~AnoYWQKA__'}
      ];
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        centerMode: true,
        autoplay:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: false,
                autoplay: true,
                swipe: true,
                centerMode:false
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      };
      
  return (
    <>
    <div className="container mt-11 reactSliderEdit">
        <Slider {...settings} className="slider-wrapper">
          {items.map((item, index) => (
            <SliderCard key={index} {...item} />
          ))}
        </Slider>
      </div>
    </>
  )
}

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <ChevronRightIcon className="h-6 w-6" />
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
  
    const handlePrevClick = () => {
      console.log('Previous Arrow Clicked');
      onClick();
    };
    return (
      <div className="arrow prev" onClick={handlePrevClick}>
        <ChevronLeftIcon className="h-6 w-6" />
      </div>
    );
  };

export default SliderCardComponent