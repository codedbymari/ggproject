// src/pages/SearchPage/utils/dummyData.js

import hairByJImage from '../../../images/hairbyjj.png';
import example2Image from '../../../images/example2.png';
import nailsImage from '../../../images/nails.png';
import makeupImage from '../../../images/makeup.png';
import makeup1Image from '../../../images/makeup1.png';
import hairImage from '../../../assets/services/hair.png';
import amImage from '../../../assets/services/am.png';

export const dummyData = {
  HAIR: [
    {
      id: 1,
      name: "Hair By J",
      address: "22 Barking Road, Birmingham",
      rating: 5.0,
      reviews: 7,
      image: hairByJImage,
      favorite: false,
      distance: "2.3 km",
      location: {
        lat: 52.4862,
        lng: -1.8904
      },
      services: [
        {
          name: "Wig Installation",
          time: "3 hr",
          price: 350
        },
        {
          name: "Closure Sew in",
          time: "2 hr",
          price: 110
        }
      ]
    },
    {
      id: 2,
      name: "Example 2",
      address: "18 Oxford St, Birmingham",
      rating: 4.0,
      reviews: 10,
      image: example2Image,
      favorite: false,
      distance: "1.8 km",
      location: {
        lat: 52.4772,
        lng: -1.9034
      },
      services: [
        {
          name: "Knotless Braids",
          time: "3-5 hr",
          price: 150
        },
        {
          name: "Box Braids",
          time: "2 hr",
          price: 60
        }
      ]
    },
    {
      id: 3,
      name: "Curl Masters",
      address: "45 New Street, Birmingham",
      rating: 4.8,
      reviews: 24,
      image: hairImage,
      favorite: true,
      distance: "0.8 km",
      location: {
        lat: 52.4862,
        lng: -1.8804
      },
      services: [
        {
          name: "Natural Curls Styling",
          time: "1 hr",
          price: 85
        },
        {
          name: "Hair Treatment",
          time: "45 min",
          price: 65
        }
      ]
    },
    {
      id: 4,
      name: "Style & Grace",
      address: "78 Corporation St, Birmingham",
      rating: 4.5,
      reviews: 18,
      image: amImage,
      favorite: false,
      distance: "1.2 km",
      location: {
        lat: 52.4902,
        lng: -1.8954
      },
      services: [
        {
          name: "Full Highlights",
          time: "2.5 hr",
          price: 120
        },
        {
          name: "Blowout",
          time: "45 min",
          price: 45
        }
      ]
    }
  ],
  NAILS: [
    {
      id: 5,
      name: "Nail Paradise",
      address: "12 High Street, Birmingham",
      rating: 4.7,
      reviews: 32,
      image: nailsImage,
      favorite: false,
      distance: "0.5 km",
      location: {
        lat: 52.4852,
        lng: -1.8924
      },
      services: [
        {
          name: "Gel Manicure",
          time: "45 min",
          price: 35
        },
        {
          name: "Full Set Acrylics",
          time: "1.5 hr",
          price: 55
        }
      ]
    },
    {
      id: 7,
      name: "Luxury Nails & Spa",
      address: "56 Colmore Row, Birmingham",
      rating: 4.6,
      reviews: 28,
      image: nailsImage,
      favorite: true,
      distance: "0.7 km",
      location: {
        lat: 52.4832,
        lng: -1.8984
      },
      services: [
        {
          name: "Luxury Pedicure",
          time: "1 hr",
          price: 45
        },
        {
          name: "Nail Art Design",
          time: "30 min",
          price: 25
        }
      ]
    }
  ],
  MAKEUP: [
    {
      id: 6,
      name: "Glam Studio",
      address: "33 Broad Street, Birmingham",
      rating: 4.9,
      reviews: 41,
      image: makeupImage,
      favorite: false,
      distance: "1.5 km",
      location: {
        lat: 52.4762,
        lng: -1.9104
      },
      services: [
        {
          name: "Full Face Glam",
          time: "1 hr",
          price: 75
        },
        {
          name: "Bridal Makeup",
          time: "1.5 hr",
          price: 120
        }
      ]
    },
    {
      id: 8,
      name: "Beauty Defined",
      address: "92 New Street, Birmingham",
      rating: 4.4,
      reviews: 19,
      image: makeup1Image,
      favorite: false,
      distance: "0.9 km",
      location: {
        lat: 52.4792,
        lng: -1.8854
      },
      services: [
        {
          name: "Natural Makeup Look",
          time: "45 min",
          price: 55
        },
        {
          name: "Evening Makeup",
          time: "1 hr",
          price: 65
        }
      ]
    }
  ],
  SKINCARE: [
    {
      id: 9,
      name: "Skin Glow Clinic",
      address: "27 Temple Row, Birmingham",
      rating: 4.8,
      reviews: 36,
      image: makeupImage, // Using makeup image as placeholder for skincare
      favorite: false,
      distance: "0.6 km",
      location: {
        lat: 52.4812,
        lng: -1.8934
      },
      services: [
        {
          name: "Hydrating Facial",
          time: "1 hr",
          price: 70
        },
        {
          name: "Chemical Peel",
          time: "45 min",
          price: 90
        }
      ]
    }
  ],
  EYELASHES: [
    {
      id: 10,
      name: "Lash Lounge",
      address: "64 Bull Street, Birmingham",
      rating: 4.7,
      reviews: 22,
      image: makeup1Image, // Using makeup1 image as placeholder for eyelashes
      favorite: true,
      distance: "1.1 km",
      location: {
        lat: 52.4842,
        lng: -1.8964
      },
      services: [
        {
          name: "Classic Lash Extensions",
          time: "1.5 hr",
          price: 65
        },
        {
          name: "Volume Lashes",
          time: "2 hr",
          price: 85
        }
      ]
    }
  ]
};