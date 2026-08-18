import React, { createContext } from "react";

// international Images----------------------------------------------
import thailandImage from "../assets/international-img/thailland.png";
import dubaiImage from "../assets/international-img/dubai.webp";
import internation from "../assets/international-img/internation.png";
import singapore from "../assets/international-img/singapore.png";
import nepalImage from "../assets/international-img/nepal.png";
import hongkongImage from "../assets/international-img/hongkong.png";

// domesticLocations Images-------------------------------------------

// ---------------  himachal  ---------------------
import himachalHeroImage from "../assets/himachal-img/himachal-hero-banner.png"
import manali from "../assets/himachal-img/manali.png"
import manaliVolvo from "../assets/himachal-img/manali-volvo.png"
import manaliVolvoHoneymoon from "../assets/himachal-img/Manali-Volvo-Honeymoon.png"
import shimlaVolvo from '../assets/himachal-img/Shimla-Volvo.png'
import shimlaManaliVolvo from '../assets/himachal-img/Shimla Manali Volvo.png'
import shimlaManaliChanadigarh from '../assets/himachal-img/Shimla Manali Chanadigarh.png'
import GrandHimachalByCar from '../assets/himachal-img/Grand Himachal Tour Package by Car.png'
import GrandHimachalWithAmritsar from '../assets/himachal-img/Grand Himachal Tour With Amritsar.png'
import HimachalHoneymoonImage from '../assets/himachal-img/Himachal Honeymoon Tour.png'
import HimachalTourPackageExNewDelhi from '../assets/himachal-img/Himachal Tour Package Ex. New Delhi.png'

// ---------------  Amarnath  ---------------------
import manaliHeroImage from "../assets/Amarnath-img/AmarnathYatra-Banner.png"
import AmarnathYatraImage from "../assets/Amarnath-img/Amarnath Yatra.png"
import AmarnathYatraByHelicopter from "../assets/Amarnath-img/Amarnath Yatra Package By Helicopter.png"

// ---------------  Uttarakhand  ---------------------
import UttarakhandTourPackage from "../assets/uttarakhand-img/Uttarakhand-banner.png"
import NainitalTour from "../assets/uttarakhand-img/Nainital Tour.png"
import NainitalCorbett from "../assets/uttarakhand-img/Nainital & Corbett Tour.png"
import HaridwarRishikesh from "../assets/uttarakhand-img/Haridwar & Rishikesh.png"
import UttaranchalTour from "../assets/uttarakhand-img/Uttaranchal Tour.png"
import UttaranchalTour2 from "../assets/uttarakhand-img/Uttarakhand Tour-2.png"

// ---------------  Kashmir  ---------------------
import KashmirHeroBanner from "../assets/kashmir-imgs/Kashmir-banner.png"
import KashmirForFamily from "../assets/kashmir-imgs/Kashmir Tour Package For Family.png"
import KashmirTour from "../assets/kashmir-imgs/Kashmir Tour.png"
import VaishnoDevi from "../assets/kashmir-imgs/Vaishno Devi.png"
import KashmirHoneymoon from "../assets/kashmir-imgs/Kashmir Honeymoon.png"
import JannatEKashmir from "../assets/kashmir-imgs/Jannat E Kashmir Tour.png"
import VaishnoDeviKashmir from "../assets/kashmir-imgs/Vaishno Devi - Kashmir Tour.png"

// ---------------  Kerala  ---------------------
import keralaBanner from "../assets/Kerala-imgs/KeralaBanner.png"
import keralaTourImage from "../assets/Kerala-imgs/Kerala Tour.png"
import KeralaWilderness from "../assets/Kerala-imgs/Kerala Wilderness.png"
import KeralaHoneymoon from "../assets/Kerala-imgs/Kerala Honeymoon.png"
import KeralaFamily from "../assets/Kerala-imgs/Kerala Family Tour.png"
import KeralaCoconut from "../assets/Kerala-imgs/Kerala Coconut Tour.png"
import KeralaComplete from "../assets/Kerala-imgs/Complete Kerala Tour.png"

// ------------------------------------------

// --------------- LehLadakh-imgs   ---------------------
import LehLadakhHeroImage from "../assets/LehLadakh-imgs/Leh Sightseeing Tour Package.png"
import LadakhtourPakageImage from "../assets/LehLadakh-imgs/Ladakh -1.png"
import LehSightseeingtourPakageImage from "../assets/LehLadakh-imgs/Leh Ladakh Tour Packages banner.png"
import GemsofLehtourImage from "../assets/LehLadakh-imgs/Gems of Leh Tour.png"
import StunningLehtourPakageImage from "../assets/LehLadakh-imgs/Stunning Leh Tour Package.png"

// --------------- Gujarat-imgs   ---------------------
import GujaratHeroImage from "../assets/Gujarat-img/gujarat banner.png"
import GujaratFamilyPackageImage from "../assets/Gujarat-img/family-1.png"
import DwarkaSomnathPackageImage from "../assets/Gujarat-img/dwaraka-2.png"
import GujaratHoneymoonPackageImage from "../assets/Gujarat-img/honeymoon.png"

// --------------- northeast-imgs   ---------------------
import NotheastbannerImage from "../assets/northeast-imgs/north banner.png"
import DarjeelingtourPackageImage from "../assets/northeast-imgs/Darjeeling Tour-1.png"
import DarjeelingGangtokescapeImage from "../assets/northeast-imgs/Gangtok Escape-2.png"
import AmazingDarjeelingSikkimImage from "../assets/northeast-imgs/Amazing Darjeeling-3.png"
import DeluxeDarjeelingSikkimImage from "../assets/northeast-imgs/Deluxe Darjeeling-4.png"

// --------------- Andaman-imgs   ---------------------
import AndamanbannerImage from "../assets/Andaman-imgs/Andaman Tour banner.png"
import AndamanTourPackageImage from "../assets/Andaman-imgs/card-1.png"
import AndamanIslandtourPackageImage from "../assets/Andaman-imgs/card-2.png"
import AmazingAndamantourPackageImage from "../assets/Andaman-imgs/card-3.png"
import AdventurousAndamantourPackageImage from "../assets/Andaman-imgs/card-4.png"

// --------------- Goa-imgs   ---------------------
import GoabannerImage from "../assets/goa/goabanner.png"
import GoatourPackageImage from "../assets/goa/Goa tour.png"
import GoabesttourPackageImage from "../assets/goa/Goa Best Tour .png"
import Goa5daysPackageImage from "../assets/goa/Goa 5 Days Tour.png"

// ---------------  Rajasthan  ---------------------
import RajasthanBanner from "../assets/Rajasthan-img/rajasthan-banner.png"
import RajasthanGoldenTriangle from "../assets/Rajasthan-img/Golden Triangle.png"
import RajasthanHeritage from "../assets/Rajasthan-img/Rajasthan Heritage Tour.png"
import RoyalRajasthan from "../assets/Rajasthan-img/Royal Rajasthan Tour.png"
import RoyalRajasthanWithAgra from "../assets/Rajasthan-img/Royal Rajasthan With Agra Tour.png"
import MagnificentRajasthan from "../assets/Rajasthan-img/Magnificent Rajasthan Tour .png"
import RoyalRajasthanT from "../assets/Rajasthan-img/Royal Rajasthan .png"


// hero-------------
import heroImage1 from "../assets/homebanner/1.jpeg";
import heroImage2 from "../assets/homebanner/2.jpeg";
import heroImage3 from "../assets/homebanner/3.jpeg";
import heroImage4 from "../assets/homebanner/4.png";
import heroImage5 from "../assets/homebanner/5.png";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const heroSlides = [
    {
      id: 1,
      image:
       heroImage4,
      label: "Discover your next adventure",
      heading: "Discover Next Adventure",
      description:
        "Explore the world's most beautiful destinations and book your dream vacation with TravelVerse.",
      buttonText: "Explore Tours",
    },
    {
      id: 2,
      image:
        heroImage5,
      label: "Luxury escapes, unforgettable stays",
      heading: "Travel in Comfort and Style",
      description:
        "Experience premium travel packages that combine luxury, culture, and relaxation.",
      buttonText: "Browse Luxury Tours",
    },
  ];

  // domesticLocations Data------------
  const domesticLocations = [
    {
      id: "himachal",
      name: "Himachal Tour Package",
      image: himachalHeroImage,
      description:
        "A scenic mountain escape across Manali and Shimla with snow-capped valleys, adventure, and romantic hill station charm.",
      packages: [
        {
          id: "h1",
          title: "Manali Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image: manali,
          price: 4500,
          originalPrice: 5999,
          rating: 4.9,
          discountPercentage: "25",

          inclusions: [
            "Hotel Stay",
            "Welcome Drink",
            "Morning Tea",
            "Breakfast & Dinner",
            "Delhi-Manali-Delhi AC Volvo",
            "Local Sightseeing in Pvt Cab",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi - Manali (Overnight Journey)",
              meals: "Dinner",
              description:
                "Arrive in Delhi and report at the designated Volvo boarding point (Kashmiri Gate/RK Ashram) by 5:30 PM. Board the luxury AC Volvo bus for an overnight journey to Manali. Leave the city hustle behind as you cruise towards the majestic snow-capped peaks of Himachal Pradesh.",
            },
            {
              day: 2,
              title: "Arrival in Manali & Local Sightseeing",
              meals: "Breakfast, Dinner",
              description:
                "Reach Manali in the morning. Check into your hotel and rest. In the afternoon, head out for a charming local city tour. Visit the historical Hadimba Devi Temple, the peaceful Tibetan Monastery, and the Club House. Spend your evening taking a scenic walk along Mall Road for shopping.",
            },
            {
              day: 3,
              title: "Manali - Solang Valley Tour",
              meals: "Breakfast",
              description:
                "After breakfast, depart for a full-day excursion to the gorgeous Solang Valley. Renowned for its breathtaking glacial views and fine ski slopes, you can enjoy thrilling adventure activities like paragliding, zorbing, and snow scooter rides here. Return to the hotel in the evening.",
            },
            {
              day: 4,
              title: "Manali Leisure Time & Return Departure",
              meals: "Breakfast",
              description:
                "Enjoy a relaxed breakfast and check out by noon. Use your free afternoon to buy unique handicrafts, woolens, and shawls on Mall Road. At 4:00 PM, report to the private bus stand to catch your return overnight luxury Volvo back to Delhi.",
            },
            {
              day: 5,
              title: "Arrival at Delhi - Tour Ends",
              meals: "none",
              description:
                "Arrive back at Delhi ISBT around 6:00 AM. Disembark with beautiful, lifelong memories of your Himalayan retreat as your vacation wraps up successfully.",
            },
          ],
          packageInfo:
            "A specially curated getaway to the beautiful hill station of Manali from Delhi. Features comfortable hotel stays, a dedicated day for exploring snow-capped vistas at Solang Valley, and localized private cab sightseeing. Perfectly designed for travelers looking to experience the serene valleys and thrilling mountain sports of the Himalayas.",
          cities: ["Delhi", "Manali", "Delhi"],
          duration: "5 Days & 4 Nights",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "h2",
          title: "Manali Volvo Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image: manaliVolvo,
          price: 5500,
          originalPrice: 5999,
          rating: 4.7,
          discountPercentage: "25",

          inclusions: [
            "Premium Hotel Stay",
            "Hotel Stay",
            "Welcome Drink",
            "Morning Tea",
            "Breakfast & Dinner",
            "Full Day Kullu & Manikaran Excursion",
            "Delhi-Manali-Delhi AC Volvo",
            "Local Sightseeing in Pvt Cab",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi - Manali (580 Kms/11-12 hrs)",
              meals: "Dinner",
              description:
                "AArrive in Delhi by Air or Train. After reaching Delhi go to R K Ashram Metro Station / Kashmiri Gate ISBT( on your own) at 5:30 pm. Overnight Journey by Volvo Bus, Soulful Manali offers something special for everyone. It gives peace for mediators, inspiration to Artists, Daring Activities for Adventure Seekers etc. On the way to Manali you experience the cool breeze of Manali already taking all your stress away, soothing you from calmness in the environment and surprising you by presenting its jaw-dropping landscapes. Overall It is an excellent place for a holiday.",
            },
            {
              day: 2,
              title: "Arrival In Manali & Local City Tour (3-4Hrs)",
              meals: "Breakfast, Dinner",
              description:
                "Upon reaching Manali between 6:00 AM and 7:00 AM, meet our representative at the Manali Volvo Stand and transfer to your hotel. After check-in, freshen up and enjoy some leisure time. In the evening at around 3:00 PM, proceed for local sightseeing in Manali. Visit the famous Hadimba Devi Temple, the city's most prominent attraction, dedicated to Goddess Hadimba, the wife of Bhima from the Mahabharata. Built in 1553 AD, this beautiful wooden temple is surrounded by a dense forest of majestic deodar trees and is located about 2.5 km from the Mall Road. Continue to the Tibetan Monastery, also known as Gadhan Thekchhokling Gompa, built in 1969, which is renowned for its Tibetan handicrafts and handwoven carpets. Next, visit the Club House, situated about 2 km from the Mall Road, known for its recreational activities such as skating, a discotheque, and an auditorium. Later in the evening, enjoy free time to explore the popular shopping areas of Manali, including Mall Road and IBEX Market. Return to the hotel for dinner and an overnight stay.",
            },
            {
              day: 3,
              title: "Manali - Solang Valley- Manali",
              meals: "Breakfast",
              description:
                "Morning After Getting Fresh Get Ready As Soon As Possible To Depart For Solang Valley in Manali is located at a distance of 13 kms in a side valley at the top of the Kullu valley is a splendid valley between Solang village and Beas Kund. Solang valley offers the view of glaciers and snow capped mountains and peaks. Solang Valley has fine ski slopes. The Mountaineering Institute of Manali has installed a ski lift for training purposes. Located here is a hut and guest house of the Mountaineering and Allied sports Institute, Manali. Now a few hotels have also come up. The winter skiing festival is organized in Solang Valley. Sking and Paragliding are two main activities that are organized here. Apart from this many other adventure sports are available like Zorbing, Horse riding & Snow Motorbikes riding etc. Evening Drive Back To Hotel. Night Stay And Dinner In Hotel At Manali",
            },
            {
              day: 4,
              title: "Manali - Kullu + Manikaran + Kasol Market ( 80Kms )",
              meals: "Breakfast",
              description:
                "Morning After Breakfast You Will Be Picked From A Hotel And Transfer To Manikaran. At 1737 Mts., On The Right Bank Of River Parvati Is Manikaran. This Place Is Famous For Hot Sulphur Springs Revered By Both Hindus & Sikhs Pilgrimages. The Water Of The Spring Is Also Said To Be Radio-Active Which Cures Many Skin Diseases. According To An Ancient Saying Manikaran Is Also Connected With Lord Shiva And His Divine Concert Goddess Parvati. On The Way Also Visit Kasol Valley Charmingly Located On Open Space With Slopes Down To A Broad Expanse Of Clear White Sand At Edge Of The River Parvati, Vaishno Temple Which Is A Small Cave And Shrine With An Image Of Goddess Vaishno Devi. Other Temples Are Dedicated To Lord Shiva, Rama And Krishna, Angora Rabbit Farm: 8 Km. From Kullu Where The Different Varieties Of Angora Rabbits. Angora Shawls Are Available On Reasonable Rates And Visit Kullu Shawl Factory. On This Day You Can Also Enjoy Of Water Rafting At Babeli Kullu. Evening Drive Back To Hotel. Night Stay And Dinner In Hotel At Manali.",
            },
            {
              day: 5,
              title: "Leisure Morning & Return Volvo",
              meals: "none",
              description:
                "After breakfast, relax at the hotel and enjoy some last-minute shopping on Mall Road. Check out and board the Volvo at 4:00 PM from the private bus stand for the overnight journey back to Delhi.",
            },
            {
              day: 6,
              title: "Arrival in Delhi — Tour Ends",
              meals: "none",
              description:
                "Arrive in Delhi around 7:00 AM with a drop at ISBT, closing a honeymoon full of mountain memories.",
            },
          ],
          packageInfo:
            "A classic 6-day comprehensive tour offering an extended stay in beautiful Manali by semi-sleeper AC Volvo from Delhi. This plan seamlessly balances guided excursions to hot springs and alpine spots with dedicated downtime. Ideal for friends and families wishing to explore the mountains at a comfortable, leisurely pace.",
          cities: ["Delhi", "Manali", "Delhi"],
          duration: "6 Days & 5 Nights",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "h3",
          title: "Manali Volvo Honeymoon Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image: manaliVolvoHoneymoon,
          price: 5599,
          originalPrice: 6999,
          rating: 4.9,
          discountPercentage: "25",
          inclusions: [
            "Couple Room Stay",
            "Premium Hotel Stay",
            "Welcome Drink",
            "Morning Tea",
            "Breakfast & Dinner",
            "Candle Light Dinner (1 Session)",
            "Delhi-Manali-Delhi AC Volvo",
            "Local Sightseeing in Pvt Cab",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Departure from Delhi by Volvo",
              meals: "Dinner",
              description:
                "Reach the boarding point near R K Ashram Metro Station by 5:00 PM; the Volvo departs at 5:30 PM for a comfortable overnight road journey from Delhi to Manali.",
            },
            {
              day: 2,
              title: "Manali Arrival & Romantic Local Tour",
              meals: "Breakfast, Dinner",
              description:
                "On morning arrival in Manali, our representative will pick you up and transfer you to your pre-booked hotel. After check-in and rest, enjoy a half-day city tour covering Hadimba Devi Temple, Manu Temple, Vashisht Temple with its natural hot springs, the Club House and the Tibetan Monastery. Evening free for a romantic walk on Mall Road. Dinner and overnight at the hotel.",
            },
            {
              day: 3,
              title: "Rohtang Pass / Snow Point Excursion",
              meals: "Breakfast",
              description:
                "After breakfast, set off on a full-day excursion towards the snow, passing Kothi village, Gulaba, Marhi and Solang Valley en route to the mighty Rohtang Pass at 3,979 m — the gateway to Lahaul-Spiti, with snow nearly all year round. If Rohtang is closed due to weather, the tour proceeds up to Snow Point or Solang Valley instead. Return by evening for dinner and overnight in Manali.",
            },
            {
              day: 4,
              title: "Kullu – Manikaran Day Trip",
              meals: "Breakfast, Dinner",
              description:
                "Post breakfast, enjoy a full-day outing through the Kullu valley — Kasol's riverside charm, the Angora rabbit farm, the Vaishno Temple and the sacred hot sulphur springs of Manikaran. Optional river rafting on the Beas adds a dash of adventure. Return to the hotel for dinner and overnight stay.",
            },
            {
              day: 5,
              title: "Leisure Morning & Return Volvo",
              meals: "Breakfast",
              description:
                "After breakfast, relax at the hotel and enjoy some last-minute shopping on Mall Road. Check out and board the Volvo at 4:00 PM from the private bus stand for the overnight journey back to Delhi.",
            },
            {
              day: 6,
              title: "Arrival in Delhi — Tour Ends",
              meals: "none",
              description:
                "Arrive in Delhi around 7:00 AM with a drop at ISBT, closing a honeymoon full of mountain memories.",
            },
          ],
          packageInfo:
            "A specially curated 5 nights / 6 days honeymoon in Manali by AC Volvo from Delhi, with three nights in a couple-friendly hotel, a romantic candlelight dinner session, snow time at Rohtang Pass / Snow Point and a scenic day along the Parvati valley at Kullu, Kasol and Manikaran. Everything a newly-wed couple needs to begin their journey amid the Himalayas.",
          cities: ["Delhi", "Manali", "Delhi"],
          duration: "6 Days & 5 Nights",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "h4",
          title: "Shimla Volvo Tour Package",
          description:
            "Explore the scenic beauty of Shimla with adventure activities",
          image: shimlaVolvo,
          price: 5599,
          originalPrice: 6999,
          rating: 4.6,
          discountPercentage: "25",
          inclusions: [
            "Standard Hotel Room Stay",
            "Welcome Drink",
            "Morning Tea",
            "Breakfast & Dinner",
            "Day Trip to Kufri Excursion",
            "Delhi-Shimla-Delhi AC Volvo",
            "Local Sightseeing in Pvt Cab",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Departure from Delhi by Volvo to Shimla",
              meals: "Dinner",
              description:
                "Arrive at the Delhi boarding hub near RK Ashram Metro Station / ISBT by 8:00 PM. Board your comfortable AC Volvo bus for a relaxing night journey to Shimla, gliding comfortably through up-hill roads.",
            },
            {
              day: 2,
              title: "Shimla Arrival & Heritage Local Tour",
              meals: "Breakfast, Dinner",
              description:
                "Arrive at Shimla in the morning and transfer to your hotel. After setting up, venture out to see heritage colonial landmarks: the historic Christ Church, Gaiety Theatre, Jakhoo Temple, and the sprawling Ridge. Spend a cool evening walking along Mall Road.",
            },
            {
              day: 3,
              title: "Excursion to Kufri Hills",
              meals: "Breakfast",
              description:
                "Enjoy a hearty breakfast before heading out on a scenic driving tour to Kufri, situated at a high altitude. Explore the Himalayan Nature Park, catch stunning glimpses of snow ranges, and enjoy fun pony rides. Head back to the hotel for dinner.",
            },
            {
              day: 4,
              title: "Shimla to Delhi Return Journeyp",
              meals: "Breakfast",
              description:
                "Have breakfast, check out of your hotel, and store your bags securely. Spend your last few hours exploring the local Lakkar Bazaar for wooden items and handicrafts. Board the return afternoon AC Volvo bus to travel back to Delhi, concluding the tour.",
            },
          ],
          packageInfo:
            "Escape to the 'Queen of Hills' with a customized 4-day Shimla itinerary via luxury AC Volvo from Delhi. Stay at fine hotels, explore the iconic Ridge and Mall Road, and witness beautiful pine-forested landscapes. Perfect for short corporate breaks or quick weekend refreshers in the chilly hills.",
          cities: ["Delhi", "Shimla", "Delhi"],
          duration: "4 Days & 3 Nights",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "h5",
          title: "Shimla Manali Volvo Tour Package",
          description:
            "Explore the scenic beauty of Shimla with adventure activities",
          image: shimlaManaliVolvo,
          price: 10999,
          originalPrice: 11999,
          rating: 4.6,
          discountPercentage: "25",
          inclusions: [
            "3 Nights Stay in Manali & 2 Nights in Shimla",
            "Refreshing Non-Alcoholic Welcome Drinks",
            "Daily Morning Tea & Hot Breakfasts",
            "Kufri & Solang Valley Guided Day Trips",
            "Day Trip to Kufri Excursion",
            "All Inter-City AC Volvo Transfers",
            "Dedicated Private Car Sightseeing",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Shimla (Overnight Volvo)",
              meals: "Dinner",
              description:
                "Gather at your assigned assembly hub in Delhi by 8:30 PM. Complete boarding steps and set off on your overnight journey through smooth winding lanes up towards the pristine air of Shimla.",
            },
            {
              day: 2,
              title: "Shimla Arrival & Afternoon Local Sightseeing",
              meals: "Breakfast, Dinner",
              description:
                "Arrive in Shimla early morning, check in at the hotel and unwind. By early afternoon, head out to explore the neo-gothic Christ Church, the bustling Ridge, Mall Road, and take in the panoramic forest vistas from Jakhoo Hill. Enjoy dinner at your hotel.",
            },
            {
              day: 3,
              title: "Shimla - Kufri Excursion & Inter-city Transfer to Manali",
              meals: "Breakfast",
              description:
                "After breakfast, head out for a day trip to the alpine pastures of Kufri. Later in the afternoon, check out from your hotel and board your direct executive Volvo bus to transfer to the high mountain valleys of Manali. Check into your Manali hotel late at night.",
            },
            {
              day: 4,
              title: "Manali Local Sightseeing Tour ",
              meals: "Breakfast",
              description:
                "Fuel up with breakfast, then head out to explore Manali. Discover the legendary Hadimba Devi Temple, walk through wood-lined trails to Vashisht Hot Springs, and visit the Tibetan Monastery. Enjoy a relaxed evening walking along Mall Road.",
            },
            {
              day: 5,
              title: "Full Day Adventure at Solang Valley",
              meals: "Breakfast",
              description:
                "Dedicate your morning to the stunning snow points and views of Solang Valley. Participate in dynamic mountain activities like paragliding, zorbing, or cable car rides against panoramic snowy backdrops. Head back to the hotel for a fresh dinner.",
            },
            {
              day: 6,
              title: "Kullu Valley Stopover & Return to Delhi",
              meals: "Breakfast",
              description:
                "After breakfast, pack your bags and check out. Travel down to Kullu Valley for authentic shawl factory shopping and optional river rafting. By late afternoon, board your overnight AC Volvo from Manali for the return journey back to Delhi.",
            },
            {
              day: 7,
              title: "Arrival in Delhi - Tour Ends",
              meals: "Breakfast",
              description:
                "Arrive safely at Delhi ISBT around 7:00 AM. Say goodbye to your driver and head home with wonderful memories of your extensive Shimla and Manali vacation.",
            },
          ],
          packageInfo:
            "A grand multi-city highway itinerary covering 3 nights in scenic Manali and 2 nights in colonial Shimla. Traveling smoothly between Delhi and the stations via upscale AC Volvo, this package covers historical ridge lines, hot springs, deep valleys, and high snow points. The ideal choice for travelers wanting to experience both premium hill resorts in a single journey.",
          cities: ["Delhi", "Manali (3N)", "Shimla (2N)", "Delhi"],
          duration: "7 Days & 6 Nights",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "h6",
          title: "Shimla Manali Chanadigarh Tour Package",
          image: shimlaManaliChanadigarh,
          description:
            "A complete 6 nights / 7 days North India circuit by private sedan — 2 nights in Shimla, 3 in Manali and 1 in Chandigarh. Enjoy door-to-door comfort ex-Delhi with Kufri, Rohtang / Solang adventures, Kullu-Manikaran en route, and a finale among Chandigarh's gardens and lakes.",
          price: 16500,
          originalPrice: 17999,
          rating: 4.7,
          discountPercentage: "8",
          inclusions: [
            "Hotel Accommodation in Shimla, Manali & Chandigarh",
            "Refreshing Welcome Drinks on Arrival",
            "Daily Morning Tea, Breakfasts, and Dinners",
            "Luxury Delhi-Shimla-Manali-Chandigarh Intercity Volvo",
            "Day Trips to Kufri and Solang Valley",
            "Chandigarh Local City Tour",
            "All Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Shimla Route (Overnight Journey)",
              meals: "Dinner",
              description:
                "Assemble at the Delhi boarding station by 9:00 PM to catch your comfortable overnight AC Volvo. Relax in reclining seats as you climb into the refreshing, cooler altitudes of Himachal Pradesh.",
            },
            {
              day: 2,
              title: "Shimla Arrival & Local Architecture Tour",
              meals: "Breakfast, Dinner",
              description:
                "Arrive in Shimla in the morning and check into your hotel. In the afternoon, set out for a guided walk to Christ Church, the Ridge, Mall Road, and historical wooden cottage marketplaces. Enjoy dinner at your hotel.",
            },
            {
              day: 3,
              title: "Shimla - Kufri Valley Tour & Drive to Manali",
              meals: "Breakfast, Dinner",
              description:
                "After an early breakfast, enjoy an excursion to the forest hills of Kufri. Afterward, begin a highly scenic road transfer towards Manali, passing along the Beas River and through the Kullu Valley. Check in at your Manali hotel late in the evening.",
            },
            {
              day: 4,
              title: "Manali Local Sightseeing Experience",
              meals: "Breakfast, Dinner",
              description:
                "Spend your day visiting Manali's cultural highlights. Explore the wooden architecture of Hadimba Devi Temple, visit the serene Tibetan Monastery, and step into Vashisht village to see the natural sulfur springs. Spend your evening relaxing on Mall Road.",
            },
            {
              day: 5,
              title: "Excursion to Solang Valley",
              meals: "Breakfast, Dinner",
              description:
                "Head out for a thrilling day at Solang Valley. Take in the beautiful views of glaciers and giant peaks while enjoying adventure sports like paragliding, quad biking, and skiing. Return to the hotel for a warm dinner.",
            },
            {
              day: 6,
              title: "Manali to Chandigarh - Rock Garden Tour",
              meals: "Breakfast, Dinner",
              description:
                "After breakfast, drive down to the well-planned city of Chandigarh. Upon arrival, check in at your hotel and visit Nek Chand's famous Rock Garden, made entirely of recycled industrial waste, along with the scenic Sukhna Lake. Enjoy dinner at the hotel.",
            },
            {
              day: 7,
              title: "Chandigarh to Delhi Departure",
              meals: "Breakfast",
              description:
                "Enjoy breakfast at your hotel before check-out. Spend the morning exploring the local markets of Sector 17, then board your return Volvo or private transfer back to Delhi. Arrive in Delhi by evening as your package concludes.",
            },
          ],
          packageInfo:
            "A balanced 7-day tour that connects the mountain beauty of Shimla and Manali with the organized urban charm of Chandigarh. Perfect for travelers seeking a diverse itinerary, this package includes heritage trails, alpine snow sports, riverside stops in Kullu, and visits to Chandigarh's iconic Rock Garden.",
          cities: ["Delhi", "Shimla", "Kullu", "Manali", "Chandigarh", "Delhi"],
          duration: "6 Nights / 7 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Shimla", "Manali", "Chandigarh", "Private Car"],
        },
        {
          id: "h7",
          title: "Grand Himachal Tour Package by Car",
          image: GrandHimachalByCar,
          description:
            "A premium 6 nights / 7 days Himachal circuit by private car ex-Delhi covering Shimla, Manali and Chandigarh with upgraded couple accommodation, a candlelight dinner session and full sightseeing — Kufri's slopes, Rohtang / Solang adventures, Manali's temples and monasteries, and Chandigarh's gardens to finish in style.",
          price: 20999,
          originalPrice: 45999,
          rating: 4.9,
          discountPercentage: "2",
          inclusions: [
            "Premium Couple Room Stay",
            "Welcome Drink",
            "Morning Tea",
            "Breakfast & Dinner",
            "Pickup & Drop Ex Delhi",
            "Candle Light Dinner (1 Session)",
            "Local Sightseeing in Pvt Cab",
            "All Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Shimla by Car (approx. 380 km / 8 hrs)",
              meals: "Dinner",
              description:
                "Our team receives you in Delhi and drives you up to Shimla. Check in to your premium hotel and relax, or stroll the Mall Road in the evening. Overnight in Shimla.",
            },
            {
              day: 2,
              title: "Shimla & Kufri Sightseeing",
              meals: "Breakfast, Dinner",
              description:
                "After breakfast, take in Christ Church, Mall Road and The Ridge, then drive to Kufri for horse rides and panoramic mountain views. Return to the hotel for a comfortable night.",
            },
            {
              day: 3,
              title: "Shimla to Manali via Kullu & Manikaran",
              meals: "Breakfast, Dinner",
              description:
                "Drive towards Manali after breakfast, halting at Kullu and the hot springs of Manikaran on the way. Check in on arrival and rest overnight.",
            },
            {
              day: 4,
              title: "Rohtang Pass / Snow Point & Solang",
              meals: "Breakfast, Dinner",
              description:
                "Spend the day on the adventure circuit — Rohtang Pass and Solang Nullah with paragliding, zorbing and rock climbing on offer, plus boating at Van Vihar and a monastery visit on the return. Overnight in Manali.",
            },
            {
              day: 5,
              title: "Manali Local Sightseeing",
              meals: "Breakfast, Dinner",
              description:
                "A full day around Manali — Hadimba Temple, Manu Temple, Nehru Kund and the Tibetan monasteries — followed by a romantic candlelight dinner at the hotel.",
            },
            {
              day: 6,
              title: "Manali to Chandigarh",
              meals: "Breakfast, Dinner",
              description:
                "Drive to Chandigarh after breakfast and explore the Rose Garden, Sukhna Lake, Rock Garden, Open Hand Monument and Capitol Complex. Overnight in Chandigarh.",
            },
            {
              day: 7,
              title: "Chandigarh to Delhi — Tour Ends",
              meals: "Breakfast",
              description:
                "Post breakfast, transfer to Delhi airport / railway station for your onward journey.",
            },
          ],
          packageInfo:
            "A premium 6 nights / 7 days Himachal circuit by private car ex-Delhi covering Shimla, Manali and Chandigarh with upgraded couple accommodation, a candlelight dinner session and full sightseeing — Kufri's slopes, Rohtang / Solang adventures, Manali's temples and monasteries, and Chandigarh's gardens to finish in style.",
          cities: ["Delhi", "Shimla", "Manali", "Chandigarh", "Delhi"],
          duration: "6 Nights / 7 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Shimla", "Manali", "Chandigarh", "Luxury Drive"],
        },
        {
          id: "h8",
          title: "Grand Himachal Tour With Amritsar",
          image: GrandHimachalWithAmritsar,
          description:
            "The grandest of Himachal circuits — 9 nights / 10 days by private AC sedan ex-Delhi covering Shimla (2N), Manali (3N), Dharamshala (1N), Dalhousie (2N) and Amritsar (1N). From Kufri's slopes and Solang's adventures to McLeodganj's monasteries, Khajjiar's meadows and the Golden Temple's serenity — one journey, all of North India's hill and heritage highlights.",
          price: 44999,
          originalPrice: 50999,
          rating: 4.8,
          discountPercentage: "7",
          inclusions: [
            "Shimla 2N + Manali 3N + Dharamshala 1N + Dalhousie 2N + Amritsar 1N",
            "9 Breakfasts & 9 Dinners",
            "Sedan AC Pickup & Drop Ex Delhi",
            "All Toll, Parking, Driver & Fuel Costs",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Shimla",
              meals: "Dinner",
              description:
                "Meet our representative in Delhi and drive to Shimla, the former summer capital of British India set amid pine, deodar and rhododendron forests. Check in, relax, and enjoy an evening on Mall Road. Overnight in Shimla.",
            },
            {
              day: 2,
              title: "Shimla City Tour & Kufri Excursion",
              meals: "Breakfast, Dinner",
              description:
                "After breakfast, visit the Indian Institute of Advanced Study, Sankat Mochan Temple and Jakhoo Temple, then drive to Kufri at 2,622 m — a scenic and sporty hotspot, with Green Valley and Fagu Valley nearby. Evening free on The Mall and The Ridge with Christ Church and the Tudor-style library in view. Overnight in Shimla.",
            },
            {
              day: 3,
              title: "Shimla to Manali via Kullu",
              meals: "Breakfast, Dinner",
              description:
                "Check out after breakfast and drive to Manali at 2,050 m on the Beas river. En route, pause at Kasol's white-sand riverbanks, the Vaishno Devi cave shrine, the Kullu shawl factory and the Angora rabbit farm. Check in on arrival and rest overnight in Manali.",
            },
            {
              day: 4,
              title: "Manali Local Sightseeing",
              meals: "Breakfast, Dinner",
              description:
                "Explore the 1553-built Hadimba Temple with its four-tiered pagoda roof, the Club House with its skating rink and billiards rooms, Manu Temple, Van Vihar, the Tibetan Monastery and Vashisht's natural hot-spring baths. Evening on Mall Road. Overnight in Manali.",
            },
            {
              day: 5,
              title: "Solang Valley Excursion",
              meals: "Breakfast, Dinner",
              description:
                "Drive 13 km to Solang Valley for glacier views, ski slopes and adventure sports — paragliding, zorbing, horse riding and snow motorbikes (on direct payment). Return by evening for dinner and overnight stay.",
            },
            {
              day: 6,
              title: "Manali to Dharamshala (approx. 280 km / 6–7 hrs)",
              meals: "Breakfast, Dinner",
              description:
                "After breakfast, drive to Dharamshala on the spur of the Dhauladhar range, wooded with oak and conifer and ringed by snow peaks on three sides. Check in and spend the rest of the day at leisure. Overnight in Dharamshala.",
            },
            {
              day: 7,
              title: "Dharamshala Sightseeing & Drive to Dalhousie",
              meals: "Breakfast, Dinner",
              description:
                "Visit McLeodganj, the Dalai Lama Temple, Naddi viewpoint and Dal Lake in the morning, then drive on to Dalhousie at 2,039 m on the outer Dhauladhar slopes. Check in, with the evening free for leisure and shopping. Overnight in Dalhousie.",
            },
            {
              day: 8,
              title: "Full-Day Khajjiar Excursion",
              meals: "Breakfast, Dinner",
              description:
                "Spend the day at Khajjiar, 25 km away — a saucer-shaped meadow ringed by dense pine and deodar forests, with a small lake and floating island at its heart, often called Mini Switzerland. Return to Dalhousie for the night.",
            },
            {
              day: 9,
              title: "Dalhousie to Amritsar (approx. 200 km / 4 hrs)",
              meals: "Breakfast, Dinner",
              description:
                "Check out after breakfast and drive to Amritsar. Witness the flag-lowering ceremony at the Wagah Border, then visit the Golden Temple and Jallianwala Bagh before checking in. Dinner and overnight in Amritsar.",
            },
            {
              day: 10,
              title: "Amritsar to Delhi — Tour Ends",
              meals: "Breakfast",
              description:
                "After breakfast, check out and drive back to Delhi with an airport drop, concluding a truly grand Himalayan and heritage journey.",
            },
          ],
          packageInfo:
            "The grandest of Himachal circuits — 9 nights / 10 days by private AC sedan ex-Delhi covering Shimla (2N), Manali (3N), Dharamshala (1N), Dalhousie (2N) and Amritsar (1N). From Kufri's slopes and Solang's adventures to McLeodganj's monasteries, Khajjiar's meadows and the Golden Temple's serenity — one journey, all of North India's hill and heritage highlights.",
          cities: [
            "Delhi",
            "Shimla",
            "Manali",
            "Dharamshala",
            "Dalhousie",
            "Amritsar",
          ],
          duration: "9 Nights / 10 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Shimla", "Manali", "Dharamshala", "Amritsar"],
        },
        {
          id: "h9",
          title: "Himachal Honeymoon Tour Package",
          image: HimachalHoneymoonImage,
          description:
            "A romantic 8 nights / 9 days honeymoon circuit by private AC sedan ex-Delhi — Shimla (2N), Manali (3N), Dharamshala (1N) and Dalhousie (2N), complete with a honeymoon cake and candlelight dinner. Misty mall roads, snow at Solang, monastery calm at McLeodganj and the meadows of Khajjiar make this the complete Himachal romance.",   
          price: 23499,
          originalPrice: 25999,
          rating: 4.8,
          discountPercentage: "6",
          inclusions: [
            "Shimla 2N + Manali 3N + Dharamshala 1N + Dalhousie 2N",
            "8 Breakfasts & 8 Dinners",
            "Sedan AC Pickup & Drop Ex Delhi",
            "All Toll, Parking, Driver & Fuel Costs",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Shimla (approx. 380 km / 8 hrs)",
              meals: "Dinner",
              description:
                "Meet our representative in Delhi and drive to Shimla, set amid snow-capped Shivalik ranges and deodar forests. Check in, relax, and end the day with an evening walk on Mall Road. Overnight in Shimla.",
            },
            {
              day: 2,
              title: "Shimla City Tour & Kufri",
              meals: "Breakfast, Dinner",
              description:
                "After breakfast, visit the Indian Institute of Advanced Study, Sankat Mochan Temple and Jakhoo Temple, then head to Kufri at 2,622 m for its scenery and snow sports. Evening free on The Mall and The Ridge near Christ Church. Overnight in Shimla.",
            },
            {
              day: 3,
              title: "Shimla to Manali via Kullu (approx. 280 km / 7 hrs)",
              meals: "Breakfast, Dinner",
              description:
                "Drive through the Kullu valley to Manali at 2,050 m on the Beas river — a summer favourite and a snow-draped wonder in winter. Check in and spend the evening exploring the local markets. Overnight in Manali.",
            },
            {
              day: 4,
              title: "Manali Local Sightseeing",
              meals: "Breakfast, Dinner",
              description:
                "Discover the 16th-century Hadimba Temple with its carved doorway and pagoda roof, the Club House, Manu Temple, Van Vihar, the Tibetan Monastery and Vashisht's hot-spring baths. Evening together on Mall Road. Overnight in Manali.",
            },
            {
              day: 5,
              title: "Solang Valley Day",
              meals: "Breakfast, Dinner",
              description:
                "Drive to Solang Valley for glacier views and adventure — paragliding and skiing in season, plus zorbing, horse riding and snow motorbikes (on direct payment). Return for a cosy evening and overnight in Manali.",
            },
            {
              day: 6,
              title:
                "Manali to Dharamshala via Kullu (approx. 280 km / 6–7 hrs)",
              meals: "Breakfast, Dinner",
              description:
                "After breakfast, drive to Dharamshala, the wooded hill town on the Dhauladhar spur with snow peaks on three sides. Check in and relax for the rest of the day. Overnight in Dharamshala.",
            },
            {
              day: 7,
              title:
                "Dharamshala Sightseeing & Drive to Dalhousie (approx. 130 km)",
              meals: "Breakfast, Dinner",
              description:
                "Morning tour of McLeodganj, the Dalai Lama Temple, Naddi and Dal Lake, then continue to Dalhousie at 2,039 m. Check in, with the evening free for leisure and shopping. Overnight in Dalhousie.",
            },
            {
              day: 8,
              title: "Full-Day Chamba & Khajjiar Trip",
              meals: "Breakfast, Dinner",
              description:
                "Spend the day at Khajjiar — the Mini Switzerland of India, a green saucer-shaped plateau with a lake and floating island ringed by deodar forests — along with a visit to historic Chamba. Return to Dalhousie for the night.",
            },
            {
              day: 9,
              title: "Dalhousie to Delhi — Tour Ends (approx. 570 km / 8 hrs)",
              meals: "Breakfast",
              description:
                "After breakfast, check out and drive back to Delhi with a drop at the airport / railway station, closing a honeymoon written in the hills.",
            },
          ],
          packageInfo:
            "A romantic 8 nights / 9 days honeymoon circuit by private AC sedan ex-Delhi — Shimla (2N), Manali (3N), Dharamshala (1N) and Dalhousie (2N), complete with a honeymoon cake and candlelight dinner. Misty mall roads, snow at Solang, monastery calm at McLeodganj and the meadows of Khajjiar make this the complete Himachal romance.",
          cities: [
            "Delhi",
            "Shimla",
            "Manali",
            "Kullu",
            "Dharamshala",
            "Dalhousie",
            "Delhi",
          ],
          duration: "8 Nights / 9 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Shimla", "Manali", "Dharamshala", "Honeymoon"],
        },
        {
          id: "h10",
          title: "Himachal Tour Package Ex. New Delhi",
          image: HimachalTourPackageExNewDelhi,
          description:
            "An all-rounder 8 nights / 9 days Himachal circuit by private AC sedan ex-Delhi — Shimla (2N), Manali (3N), Dharamshala (1N) and Dalhousie (2N). Heritage walks in Shimla, snow play at Solang, Tibetan culture at McLeodganj and the postcard meadows of Khajjiar, with all tolls, parking and fuel included for a worry-free road trip.",
          price: 23499,
          originalPrice: 24999,
          rating: 4.7,
          discountPercentage: "6",
          inclusions: [
            "Shimla 2N + Manali 3N + Dharamshala 1N + Dalhousie 2N",
            "8 Breakfasts & 8 Dinners",
            "Sedan AC Pickup & Drop Ex Delhi",
            "All Toll, Parking, Driver & Fuel Costs",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Shimla (approx. 380 km / 8 hrs)",
              meals: "Dinner",
              description:
                "Meet our representative in Delhi and set off on a scenic drive to Shimla, the former summer capital of British India. Check in, unwind, and stroll Mall Road in the evening. Overnight in Shimla.",
            },
            {
              day: 2,
              title: "Shimla City Tour & Kufri",
              meals: "Breakfast, Dinner",
              description:
                "After breakfast, visit the Indian Institute of Advanced Study, Sankat Mochan Temple and Jakhoo Temple, then enjoy an afternoon at Kufri (2,622 m) with its sweeping views and snow sports. Evening at The Mall and The Ridge. Overnight in Shimla.",
            },
            {
              day: 3,
              title: "Shimla to Manali via Kullu (approx. 280 km / 7 hrs)",
              meals: "Breakfast, Dinner",
              description:
                "Drive along the Beas through the Kullu valley to Manali at 2,050 m, a base for treks and white-water rafting. Check in, then explore the local markets at leisure. Overnight in Manali.",
            },
            {
              day: 4,
              title: "Manali Local Sightseeing",
              meals: "Breakfast, Dinner",
              description:
                "A relaxed city tour — the 1553-built Hadimba Temple, the Club House, Manu Temple, Van Vihar, the Tibetan Monastery and Vashisht hot springs. Evening free on Mall Road. Overnight in Manali.",
            },
            {
              day: 5,
              title: "Solang Valley Day",
              meals: "Breakfast, Dinner",
              description:
                "Drive 13 km to Solang Valley between Solang village and Beas Kund — fine ski slopes, glacier views, paragliding, zorbing and horse riding (activities on direct payment). Return by evening for dinner and overnight stay.",
            },
            {
              day: 6,
              title:
                "Manali to Dharamshala via Kullu (approx. 280 km / 6–7 hrs)",
              meals: "Breakfast, Dinner",
              description:
                "After breakfast, drive to Dharamshala on the Dhauladhar spur, wooded with oak and conifer. Check in and spend the rest of the day at ease. Overnight in Dharamshala.",
            },
            {
              day: 7,
              title:
                "Dharamshala Sightseeing & Drive to Dalhousie (approx. 130 km)",
              meals: "Breakfast, Dinner",
              description:
                "Tour McLeodganj, the Dalai Lama Temple, Naddi viewpoint and Dal Lake in the morning, then drive to Dalhousie at 2,039 m. Evening free for leisure and shopping. Overnight in Dalhousie.",
            },
            {
              day: 8,
              title: "Full-Day Chamba & Khajjiar Trip",
              meals: "Breakfast, Dinner",
              description:
                "Day trip to Khajjiar, 25 km away — the famous Mini Switzerland with its lake, floating island and deodar-fringed meadow — plus a look around historic Chamba. Return to Dalhousie for the night.",
            },
            {
              day: 9,
              title: "Dalhousie to Delhi — Tour Ends (approx. 570 km / 8 hrs)",
              meals: "Breakfast",
              description:
                "After breakfast, check out and drive back to Delhi with a drop at the airport / railway station, wrapping up a grand tour of Himachal's finest.",
            },
          ],
          packageInfo:
            "An all-rounder 8 nights / 9 days Himachal circuit by private AC sedan ex-Delhi — Shimla (2N), Manali (3N), Dharamshala (1N) and Dalhousie (2N). Heritage walks in Shimla, snow play at Solang, Tibetan culture at McLeodganj and the postcard meadows of Khajjiar, with all tolls, parking and fuel included for a worry-free road trip.",
          cities: [
            "Delhi",
            "Shimla",
            "Manali",
            "Kullu",
            "Dharamshala",
            "Dalhousie",
            "Delhi",
          ],
          duration: "8 Nights / 9 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Shimla", "Manali", "Dharamshala", "Dalhousie"],
        },
      ],
    },
    {
      id: "amarnath",
      name: "Amarnath Yatra Package",
      image: manaliHeroImage,
      description:
        "A sacred pilgrimage to the holy Amarnath Cave with mountain scenery, spiritual darshan, and thoughtful yatra planning.",
      packages: [
        {
          id: "am1",
          title: "Amarnath Yatra Tour Package",
          description:
            "A sacred pilgrimage to the holy Amarnath Cave via the Baltal–Neelgrath route with Srinagar sightseeing and a high-altitude darshan experience.",
          image: AmarnathYatraImage,
          price: 7500,
          originalPrice: 9499,
          rating: 4.8,
          discountPercentage: "20",
          inclusions: [
            "Hotel & Base Camp Accommodation",
            "Daily Breakfast & Dinner",
            "Srinagar Airport Pickup & Drop",
            "Private Cab for Sonamarg & Baltal Route",
            "Yatra Assistance & Permits Support",
            "1 Hour Shikara Ride on Dal Lake",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival at Srinagar Airport Drive to Srinagar Hotel",
              meals: "Dinner",
              description:
                "Upon arriving at Srinagar Airport, meet our representative who will assist and transfer you to your hotel. After checking in, spend a peaceful evening at leisure exploring the scenic lakeside or relaxing to prepare for the upcoming spiritual journey.",
            },
            {
              day: 2,
              title: "Srinagar to Sonamarg Drop to Baltal By Trek",
              meals: "Breakfast",
              description:
                "After an early breakfast, enjoy a scenic drive past the roaring Sindh River to Sonamarg (Meadow of Gold), moving forward to the Baltal base camp. Start your uphill trek from Baltal toward the Holy Cave shrine, joining hundreds of devotees amidst majestic Himalayan peaks.",
            },
            {
              day: 3,
              title: "Darshan Back to Neel Grath",
              meals: "Breakfast & Dinner",
              description:
                "Reach the holy cave early to perform your sacred Amarnath Cave Darshan of the natural Ice Lingam. After seeking blessings from Lord Shiva, descend back down the mountain trails to the Neel Grath / Baltal base camp where your vehicle will transfer you back to your hotel for a hearty dinner.",
            },
            {
              day: 4,
              title: "Drop to Srinagar Airport",
              meals: "Breakfast",
              description:
                "Enjoy breakfast at your hotel and complete the check-out process. Take a brief detour to visit the beautiful Mughal Gardens or local markets if time permits, before being dropped off at the Srinagar Airport for your onward journey home.",
            },
          ],
          packageInfo:
            "A dedicated 4-night spiritual pilgrimage to the sacred Amarnath Cave Shrine. This package features road transit from Srinagar to the golden meadows of Sonamarg, a traditional trek via the Baltal route to perform holy darshan of the Ice Lingam, and wraps up with comfortable hotel stays and a serene Shikara ride over Dal Lake.",
          cities: ["Srinagar", "Sonamarg", "Amarnath", "Srinagar"],
          duration: "3 Nights / 4 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "am2",
          title: "Amarnath Yatra Package By Helicopter",
          description:
            "A sacred pilgrimage to the holy Amarnath Cave via the Baltal–Neelgrath route with Srinagar sightseeing and a high-altitude darshan experience.",
          image: AmarnathYatraByHelicopter,
          price: 17500,
          originalPrice: 19999,
          rating: 4.9,
          discountPercentage: "20",
          inclusions: [
            "Premium Hotel Accommodation in Srinagar & Sonamarg",
            "Confirmed Helicopter Return Tickets (Neelgrath - Panjtarni - Neelgrath)",
            "Daily Breakfast & Nutritious Buffets Dinners",
            "Airport Transfers & Inner-city Transit via Private AC Vehicle",
            "VIP Yatra Assistance & Priority Medical Check Support",
            "Complimentary Shikara Ride on Dal Lake",
            "All Tolls, Fuel Fees, and Service Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Srinagar – Sonamarg (3- 4 Hrs)",
              meals: "Dinner",
              description:
                "Land at the Srinagar Airport where our team will welcome you. Board your private vehicle and enjoy a highly scenic 3 to 4-hour mountain drive to Sonamarg. Check into your hotel, rest, and acclimatize to the higher alpine atmosphere for your flight tomorrow.",
            },
            {
              day: 2,
              title:
                "Sonamarg – Neelgrath Baltal (Maximum Time 20 Mint by car) -Amarnath Yatra Darshan by Helicopter – Sonamarg – Srinagar",
              meals: "Breakfast & Dinner",
              description:
                "Take a short 20-minute morning drive to the Neelgrath helipad in Baltal. Board your helicopter flight to Panjtarni, followed by a short walk or pony ride to the Holy Cave for your sacred Darshan. Fly back to Neelgrath by afternoon, meet your driver, and travel down to Srinagar for dinner.",
            },
            {
              day: 3,
              title: "Srinagar Airport for Onward Journey",
              meals: "Breakfast ",
              description:
                "After breakfast, enjoy a brief tour of Srinagar, visiting the stunning Shalimar and Nishat Mughal Gardens, along with a serene Shikara ride on Dal Lake. Later, get driven smoothly to the Srinagar Airport to catch your return flight home.",
            },
          ],
          packageInfo:
            "A premium, fast-track 3-day spiritual itinerary specially designed for seniors and travelers looking for comfort. This package includes confirmed helicopter flight slots from Neelgrath (Baltal) straight to Panjtarni, bypassing days of steep trekking. It offers direct airport transfers, comfortable hotel accommodation, and a relaxing tour of Srinagar.",
          cities: ["Jammu", "Srinagar", " Baltal", "Amarnath Cave"],
          duration: "3 Nights / 4 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
      ],
    },
    {
      id: "uttarakhand",
      name: "Uttarakhand Tour Package",
      image:UttarakhandTourPackage,
      description:
        "A mixed adventure and spiritual getaway through Rishikesh, Nainital, and Auli with mountain views and river rituals.",
      packages: [
        {
          id: "u1",
          title: "Nainital Tour Package",
          description:
            "A sacred pilgrimage to the holy Amarnath Cave via the Baltal–Neelgrath route with Srinagar sightseeing and a high-altitude darshan experience.",
          image: NainitalTour,
          price: 7999,
          originalPrice: 9499,
          rating: 4.8,
          discountPercentage: "20",
          inclusions: [
            "Welcome Drink (Non Alcoholic)",
            "Hotel Stay",
            "Daily Breakfast & Dinner",
            "Pick Up and Drop From Delhi",
            "Transfer & Sightseeing in Private Car",
            "Stay In Respective Room",
            "All Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi-Nainital (6-7 hours)",
              meals: "Dinner",
              description:
                "Depart early from Delhi by road. Enjoy a scenic uphill drive past foothills and green forests to reach Nainital. Upon arrival, check into your hotel, refresh yourself, and spend a relaxing evening strolling around the famous Mall Road.",
            },
            {
              day: 2,
              title: "Nainital Local Sightseeing",
              meals: "Breakfast",
              description:
                "Spend the day exploring Nainital's famous attractions. Visit the holy Naina Devi Temple, take a peaceful boat cruise on Naini Lake, explore Eco Cave Gardens, and catch panoramic Himalayan views from Snow View Point via the ropeway.",
            },
            {
              day: 3,
              title: "Nainital-Almora",
              meals: "Dinner",
              description:
                "After breakfast, drive to the cultural town of Almora, famous for its unique local markets and panoramic views. Check into your hotel and spend the afternoon visiting the bright Kasar Devi Temple, a spot known for its unique spiritual energy.",
            },
            {
              day: 4,
              title: "Almora - Binsar Wildlife Excursion",
              meals: "Breakfast",
              description:
                "Head out for a day trip to the beautiful Binsar Wildlife Sanctuary. Take a peaceful walk through dense oak and rhododendron forests up to Zero Point for stunning panoramic views of mountain peaks like Nanda Devi. Return to Almora for the night.",
            },
            {
              day: 5,
              title: "Almora-Delhi",
              meals: "Breakfast",
              description:
                "Enjoy breakfast at the hotel before checking out. Savor your last views of the Kumaon mountains as you drive down the hills and head back to Delhi, where you will be dropped off at your preferred location.",
            },
          ],
          packageInfo:
            "A beautiful 5-day escape into the heart of the Kumaon hills. Enjoy boat cruises on the iconic Naini Lake, explore the colonial charm of Nainital town, and travel deeper into the pristine mountain ridges and cultural heritage of Almora.",
          cities: ["Delhi ", "Nainital", "Almora", "Delhi"],
          duration: "4 Nights / 5 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "u2",
          title: "Uttaranchal Tour Package",
          description:
            "A sacred pilgrimage to the holy Amarnath Cave via the Baltal–Neelgrath route with Srinagar sightseeing and a high-altitude darshan experience.",
          image: UttaranchalTour2,
          price: 22999,
          originalPrice: 25499,
          rating: 4.9,
          discountPercentage: "20",
          inclusions: [
            "Welcome Drink (Non Alcoholic)",
            "Hotel Stay",
            "Private AC Car for All Inter-city Transfers & Sightseeing",
            "Sightseeing and Excursions as per Route",
            "Ganga Aarti & Local Sightseeing Transfers",
            "Daily Hot Breakfasts and Multi-Cuisine Dinners",
            "All Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Nainital Mountain Drive",
              meals: "Dinner",
              description:
                "Depart from Delhi by private car. Drive past rustic countryside towns before winding up into the refreshing mountain air of Nainital. Check into your hotel and enjoy a free evening walking along Mall Road.",
            },
            {
              day: 2,
              title: "Nainital Lake and City Exploration",
              meals: "Breakfast & Dinner",
              description:
                "Spend your day visiting Nainital's iconic sights. Boat across Naini Lake, visit the ancient Naina Devi Temple, and take a short drive to see the beautiful lakes of Bhimtal and Naukuchiatal.",
            },
            {
              day: 3,
              title: "Nainital to Ranikhet Cantonment",
              meals: "Breakfast & Dinner",
              description:
                "After breakfast, take a scenic drive to the peaceful hill station of Ranikhet. Check into your hotel and visit the beautiful, pine-ringed Upat Golf Course and the historic Jhula Devi Temple, famous for its hundreds of brass bells.",
            },
            {
              day: 4,
              title: "Ranikhet Orchards to Jim Corbett National Park",
              meals: "Breakfast",
              description:
                "Explore the lush fruit trees at Chaubatia Orchards in the morning. Afterward, check out and drive down the winding mountain roads to the wilderness of Jim Corbett Tiger Reserve. Spend a relaxing evening at your jungle resort.",
            },
            {
              day: 5,
              title: "Full Day Jim Corbett Wildlife Experience",
              meals: "Breakfast",
              description:
                "Head out for an early morning open-jeep safari through the dense sal forests of Corbett. Look out for wild tigers, leopards, and elephants. Spend your afternoon relaxing at the resort or visiting the nearby Dhangarhi Museum.",
            },
            {
              day: 6,
              title: "Jim Corbett Leisure and Nature Walks",
              meals: "Breakfast",
              description:
                "Enjoy a relaxed day inside the resort grounds. Take a peaceful guided nature walk along the banks of the Kosi River, photograph local birds, or enjoy a traditional evening bonfire with music at your resort.",
            },
          ],
          packageInfo:
            "An immersive 7-day tour through classic Kumaon and Garhwal destinations. This package combines the lively lake culture of Nainital, the quiet, pine-scented army cantonment hills of Ranikhet, and the thrilling jungle wildlife of Jim Corbett.",
          cities: ["Delhi ", "Nainita", " Ranikhet", "Jim Corbett", "Delhi"],
          duration: "6 Nights / 7 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Darshan"],
        },
        {
          id: "u3",
          title: "Haridwar & Rishikesh Tour Package",
          description:
            "A sacred pilgrimage to the holy Amarnath Cave via the Baltal–Neelgrath route with Srinagar sightseeing and a high-altitude darshan experience.",
          image: HaridwarRishikesh,
          price: 10499,
          originalPrice: 12000,
          rating: 4.9,
          discountPercentage: "20",
          inclusions: [
            "Welcome Drink (Non Alcoholic)",
            "Hotel Stay",
            "Daily Breakfast & Dinner",
            "Private Vehicle for the Entire Delhi Route",
            "Ganga Aarti & Local Sightseeing Transfers",
            "White-Water Rafting Session Support",
            "All Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Haridwar & Evening Ganga Aarti",
              meals: "Dinner",
              description:
                "Drive from Delhi to the holy city of Haridwar. Check into your hotel, freshen up, and head to Har Ki Pauri ghat. Witness the spectacular evening Ganga Aarti as hundreds of floating oil lamps light up the sacred river.",
            },
            {
              day: 2,
              title: "Haridwar Temple Tour & Drive to Rishikesh",
              meals: "Breakfast & Dinner",
              description:
                "After breakfast, visit Mansa Devi and Chandi Devi temples via the local cable car. In the afternoon, take a short drive to Rishikesh. Check into your hotel and enjoy a peaceful evening walking along the river banks.",
            },
            {
              day: 3,
              title: "Rishikesh Adventure & Ashram Exploration",
              meals: "Breakfast & Dinner",
              description:
                "Explore the cultural icons of Rishikesh: walk across Ram Jhula, visit the famous Beatles Ashram, and see Triveni Ghat. For adventure seekers, the afternoon features an exciting white-water rafting session on the Ganges.",
            },
            {
              day: 4,
              title: "Rishikesh to Delhi Return",
              meals: "Breakfast",
              description:
                "Enjoy your morning breakfast by the river. Complete your hotel check-out and visit local handicraft markets for some shopping before boarding your private vehicle for the return drive to Delhi.",
            },
          ],
          packageInfo:
            "A refreshing and soul-soothing 4-day spiritual holiday. Witness the majestic evening Ganga Aarti at Har Ki Pauri in Haridwar, visit ancient temples, and explore Rishikesh—the Yoga Capital of the World—featuring historical ashrams and exciting river rafting.",
          cities: ["Delhi ", "Haridwar", "Rishikesh", "Delhi"],
          duration: "3 Nights / 4 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "u4",
          title: "Uttarakhand Tour Package",
          description:
            "A sacred pilgrimage to the holy Amarnath Cave via the Baltal–Neelgrath route with Srinagar sightseeing and a high-altitude darshan experience.",
          image: UttaranchalTour,
          price: 19499,
          originalPrice: 22000,
          rating: 4.9,
          discountPercentage: "20",
          inclusions: [
            "Welcome Drink (Non Alcoholic)",
            "Hotel Stay",
            "Daily Breakfast & Dinner",
            "Sightseeing and Excursions as per Route",
            "Ganga Aarti & Local Sightseeing Transfers",
            "Jungle Safari Assistance",
            "All Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Nainital (Hill Journey)",
              meals: "Dinner",
              description:
                "Get picked up from Delhi and start your road trip up into the Kumaon hills to Nainital. Check into your hotel and spend a relaxed evening shopping on Mall Road and viewing the town lights reflected on the lake.",
            },
            {
              day: 2,
              title: "Nainital Local Exploration",
              meals: "Breakfast & Dinner",
              description:
                "Enjoy a beautiful day tour of Nainital. Take a boat cruise across Naini Lake, visit the ancient Naina Devi Temple, and drive to nearby viewpoints like Snow View and Tiffin Top for spectacular valley vistas.",
            },
            {
              day: 3,
              title: "Nainital to Jim Corbett Forest Resort",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and drive down toward the plains to Jim Corbett National Park. Arrive at your jungle resort, check in, and spend the afternoon relaxing or exploring the peaceful wilderness nearby.",
            },
            {
              day: 4,
              title: "Morning Jeep Safari & Drive to Mussoorie",
              meals: "Breakfast",
              description:
                "Wake up early for an open-jeep jungle safari into Corbett's wilderness. After breakfast back at the resort, check out and drive up into the Garhwal hills to the beautiful town of Mussoorie. Check into your hotel for the night.",
            },
            {
              day: 5,
              title: "Mussoorie Local Sightseeing",
              meals: "Breakfast",
              description:
                "Explore the best of Mussoorie today. Visit the cascading Kempty Falls, take a scenic walk along Camel's Back Road, and head up to Gun Hill via ropeway for incredible mountain views. Spend the evening exploring Mall Road.",
            },
            {
              day: 6,
              title: "Mussoorie to Delhi Departure",
              meals: "Breakfast",
              description:
                "Enjoy breakfast with views of the Doon Valley, check out of your hotel, and start your return drive back to Delhi. Arrive in Delhi by late evening to complete your wonderful trip.",
            },
          ],
          packageInfo:
            "An extensive 6-day holiday covering Uttarakhand's big three: the lakes of Nainital, the wild forests of Jim Corbett, and the mist-covered colonial trails of Mussoorie, the Queen of Hills. Perfect for travelers looking for a complete mountain vacation.",
          cities: ["Delhi ", "Nainita", "Jim Corbett", "Mussoorie", "Delhi"],
          duration: "5 Nights / 6 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "u5",
          title: "Nainital & Corbett Tour Package",
          description:
            "A sacred pilgrimage to the holy Amarnath Cave via the Baltal–Neelgrath route with Srinagar sightseeing and a high-altitude darshan experience.",
          image: NainitalCorbett,
          price: 15999,
          originalPrice: 19000,
          rating: 4.9,
          discountPercentage: "20",
          inclusions: [
            "Welcome Drink (Non Alcoholic)",
            "Hotel Stay",
            "Daily Breakfast & Dinner",
            "Pick Up and Drop From Delhi",
            "Delhi to Delhi Private Car Transfers",
            "Jim Corbett Jungle Safari Assistance",
            "All Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi to Nainital (Drive & Arrival)",
              meals: "Dinner",
              description:
                "Get picked up from Delhi and travel by road to Nainital. Watch the plains slowly shift into steep mountain curves. Arrive, check into your lakeside hotel, and enjoy a free evening walking along Mall Road.",
            },
            {
              day: 2,
              title: "Full Day Nainital Lake District Tour",
              meals: "Breakfast & Dinner",
              description:
                "Dedicate your day to exploring Nainital's beautiful lakes. Visit Sattal, Bhimtal, and Naukuchiatal for scenic boating and water sports. Return to Nainital town in the evening to watch the sunset over Naini Lake.",
            },
            {
              day: 3,
              title: "Nainital to Jim Corbett National Park",
              meals: "Breakfast & Dinner",
              description:
                "After breakfast, check out and drive down to Jim Corbett National Park. On the way, stop to see the beautiful Corbett Waterfall. Check into your jungle resort, relax by the pool, and enjoy a peaceful evening in the forest.",
            },
            {
              day: 4,
              title: "Thrilling Jim Corbett Jungle Safari",
              meals: "Breakfast & Dinner",
              description:
                "Wake up early for an adventurous open-jeep jungle safari into Jim Corbett National Park. Keep an eye out for Royal Bengal Tigers, wild Asian elephants, and rare deer. Return to the resort for breakfast, and spend the afternoon relaxing.",
            },
            {
              day: 5,
              title: "Jim Corbett to Delhi Return",
              meals: "Breakfast",
              description:
                "Enjoy a relaxed breakfast at your resort before checking out. Visit the historic Garjiya Devi Temple on the Kosi River before starting your drive back to Delhi, concluding your memorable wilderness holiday.",
            },
          ],
          packageInfo:
            "An exciting 5-day journey combining the peaceful, misty lake air of Nainital with the adventurous wildlife wilderness of Jim Corbett National Park. Perfect for family vacations and nature lovers wanting to see Royal Bengal Tigers in their natural habitat.",
          cities: ["Delhi ", "Nainital", "Corbett", "Delhi"],
          duration: "4 Nights / 5 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },  
      ],
    },
    {
      id: "kashmir",
      name: "Kashmir Tour Package",
      image: KashmirHeroBanner,
      description:
        "A breathtaking Kashmir itinerary with houseboats on Dal Lake, Gulmarg meadow views, and Pahalgam valley serenity.",
      packages: [
        {
          id: "ka1",
          title: "Kashmir Tour Package For Family",
          description: "Explore the natural beauty of Kashmir Valley",
          image: KashmirForFamily,
          price: 11500,
          originalPrice: 13499,
          rating: 4.8,
          discountPercentage: "20",
          inclusions: [
            "Hotel & Luxury Houseboat Stay",
            "Daily Breakfast & Dinner",
            "Srinagar Airport Pickup & Drop",
            "Private Cab for Sonamarg & Baltal Route",
            "Yatra Assistance & Permits Support",
            "1 Hour Shikara Ride on Dal Lake",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival in Srinagar & Houseboat Stay",
              meals: "Dinner",
              description:
                "Arrive at Srinagar Airport, meet our representative, and transfer to a luxury Dal Lake Houseboat. After check-in and lunch, visit the famous Mughal Gardens: Nishat Bagh and Shalimar Bagh. Cap off your first day with a relaxing evening Shikara cruise across the lake.",
            },
            {
              day: 2,
              title: "Gulmarg Day Trip (Meadow of Flowers)",
              meals: "Breakfast",
              description:
                "After breakfast, take a day excursion to Gulmarg (52 km). Famous for its scenic golf course and winter ski slopes, you can ride Asia's highest cable car project, the Gulmarg Gondola, up to the snow-covered slopes of Apharwat Peak. Return to Srinagar for the night.",
            },
            {
              day: 3,
              title: "Pahalgam Day Trip (Valley of Shepherds)",
              meals: "Breakfast & Dinner",
              description:
                "Drive out after breakfast to Pahalgam. Along the way, stop by vibrant saffron fields and the historic Avantipura ruins. Spend your day walking along the rushing Lidder River or renting a local pony to explore the lush green meadows of Baisaran Valley. Return to Srinagar.",
            },
            {
              day: 4,
              title: "Srinagar Airport Departuret",
              meals: "Breakfast",
              description:
                "Enjoy breakfast at the hotel, check out, and take a smooth private transfer back to the Srinagar Airport to board your flight home, bringing your short family mountain holiday to a successful end.",
            },
          ],
          packageInfo:
            "A beautiful 4-day short escape tailored for families. Stay in a traditional luxury houseboat on Dal Lake, cruise on a colorful Shikara, walk through historic Mughal Gardens, and take memorable day excursions to the alpine meadows of Gulmarg and the roaring rivers of Pahalgam.",
          cities: ["Srinagar", "Gulmarg", "Pahalgam", "Srinagar"],
          duration: "3 Nights / 4 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "ka2",
          title: "Kashmir Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: KashmirTour,
          price: 18500,
          originalPrice: 19999,
          rating: 4.9,
          discountPercentage: "20",
          inclusions: [
            "1 Night Houseboat Stay & 4 Nights Premium Hotel Stays",
            "Daily Morning Breakfast & Buffet Dinners",
            "SrinaComplimentary Shikara Ride on Dal Lake",
            "Full Day Tour to Sonmarg, Gulmarg & Pahalgam",
            "All Transfers via Private Dedicated Vehicle",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Srinagar Arrival & Mughal Gardens Tour",
              meals: "Breakfast",
              description:
                "Land at Srinagar Airport and receive a warm welcome transfer to your hotel. Spend your afternoon exploring the imperial stone pavilions of Shalimar and Nishat Mughal Gardens. Enjoy a quiet evening strolling around the embankments of Dal Lake.",
            },
            {
              day: 2,
              title: "Srinagar to Sonmarg Excursion",
              meals: "Breakfast",
              description:
                "After breakfast, take a scenic 3-hour road trip to Sonmarg, the 'Meadow of Gold'. Flanked by dense fir forests and alpine peaks, you can rent a local pony or vehicle to visit the breathtaking Thajiwas Glacier. Return to your Srinagar hotel for dinner.",
            },
            {
              day: 3,
              title: "Srinagar to Gulmarg (Overnight Stay)",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and drive to Gulmarg. Check into your resort, then spend your afternoon riding the famous multi-stage Gondola lift to enjoy panoramic snow views. Enjoy a peaceful overnight stay in the mountain crisp air of Gulmarg.",
            },
            {
              day: 4,
              title: "Gulmarg to Pahalgam (Valley Transit)",
              meals: "Breakfast",
              description:
                "Drive across beautiful countryside lanes from Gulmarg to the spectacular valley of Pahalgam. Walk past expansive saffron fields and stop along the Lidder River. Check into your hotel and enjoy a peaceful evening surrounded by pine forests.",
            },
            {
              day: 5,
              title: "Pahalgam Sightseeing & Srinagar Houseboat Stay",
              meals: "Breakfast",
              description:
                "Explore Pahalgam's beautiful sights like Betaab Valley or Aru Valley in the morning. In the afternoon, return to Srinagar and check into a traditional luxury floating houseboat on Dal Lake for a romantic evening and a Shikara ride.",
            },
            {
              day: 6,
              title: "Srinagar Houseboat to Airport Drop",
              meals: "Breakfast",
              description:
                "Savor a fresh breakfast on the wooden deck of your houseboat. Pack your bags and take a short private transfer to the Srinagar Airport to catch your flight home, successfully wrapping up your complete Kashmir holiday.",
            },
          ],
          packageInfo:
            "A beautiful 4-day short escape tailored for families. Stay in a traditional luxury houseboat on Dal Lake, cruise on a colorful Shikara, walk through historic Mughal Gardens, and take memorable day excursions to the alpine meadows of Gulmarg and the roaring rivers of Pahalgam.",
          cities: ["Srinagar", "Gulmarg", "Pahalgam", "Srinagar"],
          duration: "5 Nights / 6 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "ka3",
          title: "Vaishno Devi Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: VaishnoDevi,
          price: 5000,
          originalPrice: 8999,
          rating: 4.6,
          discountPercentage: "20",
          inclusions: [
            "Hotel Accommodation in Katra",
            "Daily Breakfast & Pure Vegetarian Dinners",
            "Jammu Airport / Railway Station Pick-up & Drop",
            "Katra Hotel to Banganga Trekking Point Transfers",
            "Yatra Parchi (Registration) Assistance",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Jammu Arrival & Drive to Katra Base Camp",
              meals: "Breakfast",
              description:
                "Arrive at Jammu Railway Station or Airport. Meet our professional driver and enjoy a smooth 2-hour road trip up to Katra, the holy base camp of the pilgrimage. Check into your hotel, rest, and prepare for your spiritual trek tomorrow.",
            },
            {
              day: 2,
              title: "Holy Mata Vaishno Devi Darshan Trek",
              meals: "Breakfast",
              description:
                "Have an early breakfast and get dropped off at the Banganga checkpoint. Begin your 12 km trek up the well-paved mountain path to the Holy Bhawan. Visit Ardhkuwari Gufa, perform your sacred Darshan of the Pindis inside the cave, and visit the Bhairon Nath Temple before walking back down to Katra.",
            },
            {
              day: 3,
              title: "Katra to Jammu Return Drop",
              meals: "Breakfast",
              description:
                "Enjoy a relaxed breakfast at your hotel after the trek. Complete the check-out process and relax on a comfortable road drop back to Jammu Airport or Railway Station for your onward journey home.",
            },
          ],
          packageInfo:
            "A reliable and smooth 3-day spiritual pilgrimage starting from Jammu. This package provides direct station/airport pickups, comfortable hotel accommodations at the Katra base camp, and helpful assistance for your trek or battery-car booking up to the holy Bhawan.",
          cities: ["Jammu", "Katra", "Vaishno Devi", "Katra", "Jammu"],
          duration: "2 Nights / 3 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "ka4",
          title: "Kashmir Honeymoon Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: KashmirHoneymoon,
          price: 5000,
          originalPrice: 8999,
          rating: 4.6,
          discountPercentage: "20",
          inclusions: [
            "Hotel Accommodation in Katra",
            "Daily Breakfast & Pure Vegetarian Dinners",
            "Jammu Airport / Railway Station Pick-up & Drop",
            "Katra Hotel to Banganga Trekking Point Transfers",
            "Yatra Parchi (Registration) Assistance",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Srinagar Arrival & Houseboat Flower Setup",
              meals: "Breakfast",
              description:
                "Land at Srinagar Airport and take a private vehicle transfer to your luxury Dal Lake Houseboat. Step inside to find a beautiful honeymoon flower arrangement. Spend your afternoon visiting the Mughal Gardens and enjoy a romantic sunset Shikara ride.",
            },
            {
              day: 2,
              title: "Srinagar to Sonmarg Romantic Day Out",
              meals: "Breakfast",
              description:
                "After breakfast, enjoy a private drive to Sonmarg, the Meadow of Gold. Take a peaceful walk together along the scenic Sindh River or rent a local pony to visit the alpine Thajiwas Glacier. Return to your Srinagar hotel for a special candlelight dinner.",
            },
            {
              day: 3,
              title: "Srinagar to Gulmarg Snow Meadows",
              meals: "Breakfast & Dinner",
              description:
                "Drive out to the beautiful hill station of Gulmarg. Check into your mountain hotel and head to the Gondola cable car station. Ride up together to the high snow lines of Apharwat Peak for spectacular photos. Spend a cozy night in Gulmarg.",
            },
            {
              day: 4,
              title: "Gulmarg to Pahalgam (Valley of Shepherds)",
              meals: "Breakfast & Dinner",
              description:
                "Travel from Gulmarg to the beautiful town of Pahalgam. Drive past blooming saffron fields and through rustic mountain villages. Check into your hotel and enjoy a peaceful evening walking along the banks of the Lidder River.",
            },
            {
              day: 5,
              title: "Pahalgam Valley Tours & Return to Srinagar",
              meals: "Breakfast & Dinner",
              description:
                "Explore the beautiful, pine-ringed meadows of Betaab Valley and Chandanwari in your private car. In the afternoon, take a comfortable drive back to Srinagar and check into your hotel for your final evening.",
            },
            {
              day: 6,
              title: "Srinagar Airport Departure",
              meals: "Breakfast & Dinner",
              description:
                "Enjoy a final breakfast at your hotel before check-out. Take a private transfer back to the Srinagar Airport to catch your flight home, completing your unforgettable honeymoon in paradise.",
            },
          ],
          packageInfo:
            "A romantic 6-day honeymoon itinerary carefully designed for couples. Experience a special candlelight dinner, a flower-bed setup inside a luxury houseboat, cozy Shikara cruises on Dal Lake, and private car excursions to the snow-capped mountains of Gulmarg and Sonmarg.",
          cities: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg", "Srinagar"],
          duration: "5 Nights / 6 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "ka5",
          title: "Jannat E Kashmir Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: JannatEKashmir,
          price: 21000,
          originalPrice: 25000,
          rating: 4.8,
          discountPercentage: "20",
          inclusions: [
            "Hotel Accommodation & 1 Night in a Luxury Houseboat",
            "Daily Morning Breakfast & Premium Buffet Dinners",
            "Traditional 1-Hour Shikara Ride on Dal Lake",
            "All Inter-city Transfers and Sightseeing via Private Cab",
            "Mughal Gardens Guided Excursion",
            "All Applicable Fuel, Tolls, and Service Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Srinagar Arrival & Houseboat Leisure",
              meals: "Breakfast",
              description:
                "Arrive at Srinagar Airport, meet our tour representative, and transfer to a luxury house boat on Dal Lake. Enjoy a traditional welcome drink. In the afternoon, visit Nishat Bagh and Shalimar Bagh, followed by a beautiful evening Shikara cruise.",
            },
            {
              day: 2,
              title: "Srinagar to Gulmarg (Gondola Sightseeing)",
              meals: "Breakfast",
              description:
                "After breakfast, enjoy a scenic drive to Gulmarg. Check into your hotel and head to the famous Gulmarg Gondola. Experience the incredible two-stage cable car ropeway up to Kongdoori and Afarwat Peak for breathtaking snow views. Return to the hotel for the night.",
            },
            {
              day: 3,
              title: "Gulmarg to Pahalgam Valley Tou",
              meals: "Breakfast & Dinner",
              description:
                "Drive out after breakfast to Pahalgam, the Valley of Shepherds. Travel past beautiful saffron fields and along the scenic banks of the Lidder River. Check into your hotel, relax, and spend a peaceful evening exploring the local markets.",
            },
            {
              day: 4,
              title: "Pahalgam to Sonmarg Meadow Excursion",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and drive to the golden meadows of Sonmarg. Take a pony ride up to the stunning Thajiwas Glacier or explore the beautiful streams nearby. In the evening, drive back to Srinagar and check into your hotel.",
            },
            {
              day: 5,
              title: "Srinagar to Airport Departure",
              meals: "Breakfast",
              description:
                "Enjoy a relaxed morning breakfast at the hotel. Complete your check-out and take a comfortable private car transfer to the Srinagar Airport to board your return flight home, concluding your tour.",
            },
          ],
          packageInfo:
            "A romantic 6-day honeymoon itinerary carefully designed for couples. Experience a special candlelight dinner, a flower-bed setup inside a luxury houseboat, cozy Shikara cruises on Dal Lake, and private car excursions to the snow-capped mountains of Gulmarg and Sonmarg.",
          cities: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg", "Srinagar"],
          duration: "4 Nights / 5 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "ka6",
          title: "Vaishno Devi - Kashmir Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: VaishnoDeviKashmir,
          price: 31500,
          originalPrice: 35000,
          rating: 4.8,
          discountPercentage: "20",
          inclusions: [
            "02 Nights Stay in Katra Base Camp Hotel",
            "01 Night Stay in a Premium Srinagar Houseboat",
            "04 Nights Stay in a Srinagar Hotele",
            "01 Night Stay in a Scenic Pahalgam Valley Hotel",
            "08 Morning Breakfasts & 08 Delicious Buffets Dinners",
            "All Inter-city Transfers & Sightseeing via Dedicated Sedan Car",
            "All Applicable Fuel, Tolls, and Service Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Jammu Arrival & Transfer to Katra",
              meals: "Breakfast",
              description:
                "Arrive at Jammu Airport or Railway Station. Meet your private driver and take a smooth 2-hour road trip to Katra. Check into your hotel, relax, and spend the evening preparing for your upcoming mountain pilgrimage trek.",
            },
            {
              day: 2,
              title: "Mata Vaishno Devi Bhawan Darshan Trek",
              meals: "Breakfast",
              description:
                "Wake up early for your 12 km pilgrimage trek to the Holy Vaishno Devi Bhawan. Perform your sacred Darshan of the natural rock Pindis inside the cave shrine, visit the Bhairon Nath Temple via cable car, and walk back down to Katra for a well-deserved rest.",
            },
            {
              day: 3,
              title: "Katra to Srinagar (Scenic Road Travel)",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and take a scenic highway drive from Katra to Srinagar. Pass through beautiful mountain tunnels and watch the landscape change into the wide Kashmir Valley. Check into your Srinagar hotel and relax.",
            },
            {
              day: 4,
              title: "Srinagar Local Mughal Gardens Tour",
              meals: "Breakfast & Dinner",
              description:
                "Spend your day exploring the beautiful heritage architecture of Srinagar. Visit the Royal Spring (Chashme Shahi), Nishat Bagh, and Shalimar Bagh. In the afternoon, check into a traditional lake houseboat and enjoy a peaceful sunset Shikara cruise.",
            },
            {
              day: 5,
              title: "Full Day Sonmarg Glacier Excursion",
              meals: "Breakfast",
              description:
                "Take a scenic day trip along the roaring Sindh River to Sonmarg, the Meadow of Gold. Rent a local pony or vehicle to explore the magnificent Thajiwas Glacier and enjoy stunning alpine views before returning to Srinagar for the night.",
            },
            {
              day: 6,
              title: "Srinagar to Gulmarg Alpine Day Out",
              meals: "Breakfast",
              description:
                "After breakfast, drive to the beautiful meadows of Gulmarg. Spend the day experiencing Asia's highest cable car, the Gulmarg Gondola, up to the snow point of Apharwat Peak. Enjoy panoramic views of the Himalayas before heading back to Srinagar.",
            },
            {
              day: 7,
              title: "Srinagar to Pahalgam (Overnight Stay)",
              meals: "Breakfast",
              description:
                "Check out from Srinagar and drive to the beautiful town of Pahalgam. Walk along the banks of the rushing Lidder River, visit the local marketplace, and enjoy a peaceful overnight stay surrounded by thick pine forests.",
            },
            {
              day: 8,
              title: "Pahalgam Valley Tours & Return to Srinagar",
              meals: "Breakfast",
              description:
                "Explore the famous meadows of Betaab Valley and Aru Valley in the morning. In the afternoon, complete your check-out and take a comfortable drive back to Srinagar to check into your hotel for your final evening.",
            },
            {
              day: 9,
              title: "Srinagar to Jammu Station / Airport Drop",
              meals: "Breakfast",
              description:
                "Enjoy your final morning breakfast at the hotel. Settle into your private car for a comfortable return drive back to Jammu, where your driver will drop you off directly at the railway station or airport as your tour concludes.",
            },
          ],
          packageInfo:
            "The Deluxe 9-day combined itinerary. Begin with a sacred 2-night pilgrimage at Katra for Mata Vaishno Devi Darshan, then travel by road to Kashmir to enjoy an authentic houseboat stay, premium valley hotel accommodations, and guided sightseeing across Sonmarg, Gulmarg, and Pahalgam.",
          cities: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg", "Srinagar"],
          duration: "8 Nights / 9 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
      ],
    },
    {
      id: "kerala",
      name: "Kerala Tour Package",
      image:
        keralaBanner,
      description:
        "A relaxing Kerala experience featuring backwaters, houseboats, spice villages, and lush hill station escapes.",
      packages: [
        {
          id: "k1",
          title: "Kerala Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: keralaTourImage,
          price: 13999,
          originalPrice: 14999,
          rating: 4.8,
          discountPercentage: "20",
          inclusions: [
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast & Dinner",
            "Srinagar Airport Pickup & Drop",
            "Drop at Cochin Airport/Railway Station",
            "Yatra Assistance & Permits Support",
            "Complimentary use of Hotel Facility",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Cochin – Munnar",
              meals: "Dinner",
              description:
                "Arrive Cochin Airport or Ernakulam Railway Station, assisting all arrival formalities and you will be transferred to Munnar by surface. A 4 hour scenic/picturesque drive to Munnar through hill station. On the way visit Pine Apple Garden, Rubber Plantations, Spice Plantations, Valara Falls, Cheeyappara Falls. Arrival at a place which is called 'nature's lavers paradise'. On arrival at Munnar, check in at Hotel. Later in the day free for leisure.Overnight at Hotel in Munnar.",
            },
            {
              day: 2,
              title: "Munnar Sightseeing",
              meals: "Breakfast",
              description:
                "Morning depart to enjoy full day sightseeing tour of Munnar visiting Madupetty Dam/Lake, Echo Point, Gundala Lake, Photo Point, Rajamalai (Eravikulam) National Park – famous for Nilgiri Tahr(Wild goat), Anaimudi Peak – South India's Highest Peak, Tata Tea Museum, International Blossom(Hydel) Park, Pothamedu Sunset View. Evening Spice/Tea trailing at Munnar. Overnight at Hotel in Munnar.",
            },
            {
              day: 3,
              title: "Munnar – Alleppey",
              meals: "Breakfast & Dinner",
              description:
                "Morning proceed to Alleppey. Alleppey a charming village on the Vembanadu Lake. The land which is known for its azure backwaters, swaying palms, and floating houseboats. A 5 hour scenic drives through typical Kerala Village, Paddy Field. On arrival check in at Kettuvallam known as a famous Kerala Houseboat. Lunch at Houseboat. Cruise through the unique web of lakes, lagoons, canals and river. Visit Snake Boat, Historical Church, Paddy Field, Kuttanadan Region the only region cultivate rice below sea level. Enjoy the spectacular sunset. Overnight on board the houseboat at mid of lake.",
            },
            {
              day: 4,
              title: "Alleppey – Cochin",
              meals: "Breakfast",
              description:
                "Morning disemperk from the Houseboat at boat jetty. Visit Alleppey Beach. Proceed to Cochin. Bid farewell to this serene land as your Holidays comes to an end as you get transferred to Cochin Airport or Ernakulam Railway Station for your onward journey back to home.",
            },
          ],
          packageInfo:
            "A classic 4-day introductory exploration of God's Own Country. Designed perfectly to combine the refreshing climate of Munnar's rolling tea plantations with the traditional magic of an overnight stay inside a luxury floating houseboat on the tranquil backwaters of Alleppey.",
          cities: ["Cochin", "Munnar", "Alleppey", "Cochin"],
          duration: "3 Nights / 4 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "k2",
          title: "Kerala Wilderness Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: KeralaWilderness,
          price: 14499,
          originalPrice: 18999,
          rating: 4.7,
          discountPercentage: "20",
          inclusions: [
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast & Dinner",
            "Srinagar Airport Pickup & Drop",
            "Drop at Cochin Airport/Railway Station",
            "Yatra Assistance & Permits Support",
            "Complimentary use of Hotel Facility",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Cochin to Munnar Hill Station Transit",
              meals: "Dinner",
              description:
                "Receive a warm welcome at the Cochin station or airport. Enjoy a lovely drive uphill to Munnar, passing cascading waterfalls (Cheeyappara & Valara) and vast rubber plantations. Check into your mountain resort and spend the evening enjoying the cool air.",
            },
            {
              day: 2,
              title: "Munnar Comprehensive Hill Sightseeing",
              meals: "Breakfast",
              description:
                "Explore the best of Munnar today. Visit Mattupetty Dam, the unique acoustics of Echo Point, the Tea Museum, and Eravikulam National Park to spot the rare Nilgiri Tahr wild goat. Walk through local spice markets in the evening before returning to the resort.",
            },
            {
              day: 3,
              title: "Munnar to Thekkady Wild Woods Journey",
              meals: "Breakfast & Dinner",
              description:
                "Drive down winding mountain roads to Thekkady, the core wildlife belt of Kerala. Check into your resort and take an aromatic afternoon tour through local spice plantations growing cardamom, pepper, and vanilla. Enjoy a peaceful evening watching traditional martial arts (Kalaripayattu).",
            },
            {
              day: 4,
              title: "Thekkady to Alleppey Houseboat Check-in",
              meals: "Breakfast",
              description:
                "After an early breakfast, take a scenic drive to the Alleppey jetty. Board your private traditional houseboat and look out at emerald rice fields and swaying palms as you glide along. Enjoy a freshly prepared lunch and dinner on board while floating down the backwater canals.",
            },
            {
              day: 5,
              title: "Houseboat Disembarkation & Return to Cochin",
              meals: "Breakfast",
              description:
                "Wake up to a quiet sunrise on the lake. Disembark from your houseboat after breakfast and take a short drive to historical Fort Cochin to see the Chinese Fishing Nets if time permits. Transfer directly to the airport or station for your journey home.",
            },
          ],
          packageInfo:
            "A refreshing 5-day package that adds a deep layer of wilderness to your Kerala getaway. Journey through the high slopes of Munnar, explore the wildlife haven and spice farms of Thekkady (Periyar), and round off your experience gliding past rural villages in a cozy Alleppey houseboat.",
          cities: ["Cochin", "Munnar", "Thekkady", "Alleppey", "Cochin"],
          duration: "4 Nights / 5 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "k3",
          title: "Kerala Honeymoon Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: KeralaHoneymoon,
          price: 14499,
          originalPrice: 18999,
          rating: 4.7,
          discountPercentage: "20",
          inclusions: [
            "4 Nights Couple-Friendly Luxury Room Stay",
            "Flower Bed Decoration & Honeymoon Cake (1 Night)",
            "Daily Hot Breakfasts & 1 Romantic Candlelight Dinner",
            "Drop at Cochin Airport/Railway Station",
            "Yatra Assistance & Permits Support",
            "Dedicated Private AC Sedan Car for All Sightseeing",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Cochin to Romantic Munnar Hills",
              meals: "Dinner",
              description:
                "Get picked up from Cochin and take a beautiful drive to Munnar. Stop along the way at refreshing waterfalls and green pineapple fields. Check into your romantic honeymoon resort, unwind, and spend a cozy evening at your own pace.",
            },
            {
              day: 2,
              title: "Munnar Hills & Rose Garden Tour",
              meals: "Breakfast",
              description:
                "Enjoy breakfast before exploring the scenic landscapes of Munnar together. Visit the colorful Rose Garden, Mattupetty Lake for a scenic boat ride, and Echo Point. Capture stunning photos among the wide-open tea estates of Lockhart Valley.",
            },
            {
              day: 3,
              title: "Munnar to Thekkady Boating Experience",
              meals: "Breakfast & Dinner",
              description:
                "Drive out to the forested hills of Thekkady. After checking into your resort, take a romantic boat cruise on Periyar Lake to watch wild elephants along the shoreline. Explore the vibrant local spice markets hand-in-hand in the evening.",
            },
            {
              day: 4,
              title: "Thekkady to Alleppey Backwater Houseboat Cruise",
              meals: "Breakfast",
              description:
                "Drive to Alleppey and step on board your private luxury houseboat. Cruise down tranquil, palm-fringed canals while your personal chef prepares authentic Kerala delicacies. In the evening, enjoy a beautifully arranged private candlelight dinner on the water.",
            },
            {
              day: 5,
              title: "Alleppey Lagoon to Cochin Departure.",
              meals: "Breakfast",
              description:
                "Enjoy your morning breakfast as you cruise back to the jetty. Disembark from the houseboat and enjoy a short driving tour of historical Mattancherry and Fort Cochin before being dropped off at the airport or railway station for your flight home.",
            },
          ],
          packageInfo:
            "A beautiful, romantic 5-day escape carefully tailored for newlyweds. This package includes stays in couple-friendly resorts, a special honeymoon cake, flower-bed styling, a private candlelight dinner on a floating backwater houseboat, and scenic private sightseeing.",
          cities: ["Cochin", "Munnar", "Thekkady", "Alleppey", "Cochin"],
          duration: "4 Nights / 5 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "k4",
          title: "Kerala Family Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: KeralaFamily,
          price: 19999,
          originalPrice: 20999,
          rating: 4.8,
          discountPercentage: "20",
          inclusions: [
            "5 Nights Family Room Stays in Top-Rated Resorts",
            "Welcome Drink on Arrival at All Destinations",
            "Daily Morning Breakfasts & Buffet Dinners at Resorts",
            "All Traditional Meals (Lunch, Dinner, Breakfast) on the Houseboat",
            "Dedicated Private AC Family Van/Innova for the Entire Tour",
            "Kumarakom Sightseeing & Boat Jetty Transfers",
            "All Fuel, State Entry Tolls, Parking & Service Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Cochin Arrival & Drive to Munnar",
              meals: "Dinner",
              description:
                "Land at Cochin and meet your driver. Travel by road up to Munnar, passing deep valleys, roaring mountain streams, and green spice hills. Check into your resort and spend a relaxed evening enjoying your stay with family.",
            },
            {
              day: 2,
              title: "Munnar Family Sightseeing Excursion",
              meals: "Breakfast & Dinner",
              description:
                "Enjoy a complete family day tour of Munnar. Visit the scenic Mattupetty Dam, Echo Point, Kundala Lake, and the fascinating Tata Tea Museum to watch traditional tea leaves processing. Return to your hotel for a warm dinner.",
            },
            {
              day: 3,
              title: "Munnar to Thekkady Forest Resort",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and drive through plantation-lined roads to Thekkady. Check into your forest resort and take an afternoon family walk through an organic spice village to learn about pepper, vanilla, and clove harvesting.",
            },
            {
              day: 4,
              title: "Thekkady to Kumarakom Lake Resort",
              meals: "Breakfast & Dinner",
              description:
                "Drive down to the peaceful lakeside town of Kumarakom. Check into your premium resort on the banks of Vembanad Lake. Spend your afternoon visiting the famous Kumarakom Bird Sanctuary to spot beautiful migratory waterfowl with your family.",
            },
            {
              day: 5,
              title: "Kumarakom to Alleppey Houseboat Check-in",
              meals: "Breakfast, Lunch & Dinner",
              description:
                " Take a short drive to the Alleppey boat jetty and step onto your traditional floating houseboat. Relax on the comfortable deck with your family as you cruise past rural villages, old churches, and green rice fields. Enjoy fresh meals prepared on board.",
            },
            {
              day: 6,
              title: "Alleppey Houseboat to Cochin Return Drop",
              meals: "Breakfast",
              description:
                "Savor a fresh breakfast on the water before checking out at 09:00 AM. Travel back by road to Cochin. Explore Fort Cochin's colonial streets and local shops before your driver drops you off at the airport or station for your journey home.",
            },
          ],
          packageInfo:
            "A grand 6-day family-focused loop through Kerala's famous destinations. This package offers comfortable family stays and covers the tea hills of Munnar, wildlife trails in Thekkady, the famous bird sanctuaries of Kumarakom on Vembanad Lake, and finishes with a traditional backwater house boat stay.",
          cities: ["Cochin", "Munnar", "Thekkady", " Kumarakom", "Alleppey", "Cochin"],
          duration: "5 Nights / 6 Days",
          groupSize: "Max 20 Persons",
          bestSeason: "Jul - Apr",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "k5",
          title: "Kerala Coconut Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: KeralaCoconut,
          price: 24999,
          originalPrice: 25999,
          rating: 4.7,
          discountPercentage: "20",
          inclusions: [
            "4 Nights Couple-Friendly Luxury Room Stay",
            "Flower Bed Decoration & Honeymoon Cake (1 Night)",
            "Daily Hot Breakfasts & 1 Romantic Candlelight Dinner",
            "Drop at Cochin Airport/Railway Station",
            "Yatra Assistance & Permits Support",
            "Dedicated Private AC Sedan Car for All Sightseeing",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Cochin Arrival to Munnar Hill Station",
              meals: "Dinner",
              description:
                "Arrive at Cochin and get picked up by your private driver. Relax on a scenic 4-hour uphill drive to Munnar, passing fresh pineapple farms, rubber plantations, and mountain waterfalls. Check into your resort and enjoy a free evening.",
            },
            {
              day: 2,
              title: "Munnar Hills & National Park Sightseeing",
              meals: "Breakfast",
              description:
                "Explore Munnar's beautiful sights today. Visit Mattupetty Lake, Echo Point, and take an afternoon trip to Eravikulam National Park to see the rare Nilgiri Tahr wild goat and panoramic mountain views. Return to the resort for dinner.",
            },
            {
              day: 3,
              title: "Munnar to Thekkady Wildlife Trails",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and drive to the forested hills of Thekkady. Check into your hotel and spend the afternoon visiting an organic spice village to see cardamom and pepper processing. Enjoy a relaxed evening.",
            },
            {
              day: 4,
              title: "Thekkady to Alleppey Houseboat Cruise",
              meals: "Breakfast",
              description:
                "Drive to Alleppey and check into your traditional luxury houseboat. Savor a fresh lunch as you glide past palm-ringed canals, old churches, and green rice fields. Watch the sunset over the lake before an overnight stay on board.",
            },
            {
              day: 5,
              title: "Thekkady to Alleppey Houseboat Boarding",
              meals: "Breakfast",
              description:
                "Drive to Alleppey and check into your traditional luxury houseboat. Savor a fresh lunch as you glide past palm-ringed canals and quiet lakeside villages. Watch the sunset over the water before an overnight stay on board.",
            },
            {
              day: 6,
              title: "Kovalam Beach & Trivandrum City Sightseeing",
              meals: "Breakfast",
              description:
                "Spend your morning exploring Kovalam's beaches. In the afternoon, take a short drive to Trivandrum to see the grand Padmanabhaswamy Temple, Napier Museum, and Kuthiramalika Palace. Return to Kovalam for the night.",
            },
            {
              day: 7,
              title: "Kovalam to Trivandrum Airport / Station Departure",
              meals: "Breakfast",
              description:
                "Enjoy breakfast overlooking the Arabian Sea, then check out from your resort. Take a comfortable private transfer to the nearby Trivandrum Airport or Railway Station for your onward journey home.",
            },
          ],
          packageInfo:
            "The most comprehensive South India itinerary available. This grand 8-day journey connects Munnar, Thekkady, and Alleppey, continues down to the beaches of Kovalam, and reaches the southernmost tip of mainland India at Kanyakumari to witness unforgettable sunrises and sunsets.",
          cities: ["Cochin", "Munnar", "Thekkady", "Alleppey", " Kovalam", "Trivandrum"],
          duration: "6 Nights / 7 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
        {
          id: "k6",
          title: "Complete Kerala Tour Package",
          description: "Explore the natural beauty of Kashmir Valley",
          image: KeralaComplete,
          price: 14499,
          originalPrice: 18999,
          rating: 4.7,
          discountPercentage: "20",
          inclusions: [
            "4 Nights Couple-Friendly Luxury Room Stay",
            "Flower Bed Decoration & Honeymoon Cake (1 Night)",
            "Daily Hot Breakfasts & 1 Romantic Candlelight Dinner",
            "Drop at Cochin Airport/Railway Station",
            "Yatra Assistance & Permits Support",
            "Dedicated Private AC Sedan Car for All Sightseeing",
            "All Fuel, Tolls & Taxes",
          ],
          cancellationPolicy: [
            "60 or more days before travel: 20% cancellation charge",
            "25 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 60% cancellation charge",
            "14–8 days before travel: 80% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Cochin Arrival to Munnar Hill Station",
              meals: "Dinner",
              description:
                "Arrive at Cochin and get picked up by your private driver. Relax on a scenic 4-hour uphill drive to Munnar, passing fresh pineapple farms, rubber plantations, and mountain waterfalls. Check into your resort and enjoy a free evening.",
            },
            {
              day: 2,
              title: "Munnar Hills & National Park Sightseeing",
              meals: "Breakfast",
              description:
                "Explore Munnar's beautiful sights today. Visit Mattupetty Lake, Echo Point, and take an afternoon trip to Eravikulam National Park to see the rare Nilgiri Tahr wild goat and panoramic mountain views. Return to the resort for dinner.",
            },
            {
              day: 3,
              title: "Munnar to Thekkady Wildlife Trails",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and drive to the forested hills of Thekkady. Check into your hotel and spend the afternoon visiting an organic spice village to see cardamom and pepper processing. Enjoy a relaxed evening.",
            },
            {
              day: 4,
              title: "Thekkady to Alleppey Houseboat Cruise",
              meals: "Breakfast",
              description:
                "Drive to Alleppey and check into your traditional luxury houseboat. Savor a fresh lunch as you glide past palm-ringed canals, old churches, and green rice fields. Watch the sunset over the lake before an overnight stay on board.",
            },
            {
              day: 5,
              title: "Alleppey to Kovalam Golden Beaches",
              meals: "Breakfast",
              description:
                "Disembark after breakfast and drive down the coast to the beautiful beach resort town of Kovalam. Check into your resort and spend the afternoon sunbathing or relaxing on the golden sands of Lighthouse Beach.",
            },
            {
              day: 6,
              title: "Kovalam to Kanyakumari Sunset Tour",
              meals: "Breakfast",
              description:
                "Check out early after breakfast and drive to the southernmost tip of mainland India, Kanyakumari. Visit the Padmanabhapuram Wooden Palace along the way. In the evening, witness the breathtaking sunset over the meeting point of three oceans.",
            },
            {
              day: 7,
              title: "Vivekananda Rock Memorial & Return to Kovalam",
              meals: "Breakfast",
              description:
                "Take a morning ferry ride to the famous Vivekananda Rock Memorial and the giant Thiruvalluvar Statue. Afterward, check out from your hotel and drive back to Kovalam for a final relaxing evening by the sea.",
            },
            {
              day: 8,
              title: "Kovalam to Trivandrum Airport / Station Departure",
              meals: "Breakfast",
              description:
                "Enjoy breakfast overlooking the ocean. Complete your check-out and take a comfortable private car transfer to the Trivandrum Airport or Railway Station for your return journey home, concluding your grand tour.",
            },
          ],
          packageInfo:
            "The most comprehensive South India itinerary available. This grand 8-day journey connects Munnar, Thekkady, and Alleppey, continues down to the beaches of Kovalam, and reaches the southernmost tip of mainland India at Kanyakumari to witness unforgettable sunrises and sunsets.",
          cities: ["Cochin", "Munnar", "Thekkady", "Alleppey", " Kovalam", "Kanyakumari"],
          duration: "7 Nights / 8 Days",
          groupSize: "Max 18 Persons",
          bestSeason: "Jun - Aug",
          difficulty: "Moderate",
          highlights: ["Amarnath Cave", "Baltal Route", "Srinagar", "Darshan"],
        },
      ],
    },
    {
      id: "rajasthan",
      name: "Rajasthan Tour Package",
      image: RajasthanBanner,
      description:
        "A royal Rajasthan route through palaces, forts, lakes and heritage cities from Jaipur to Udaipur.",
      packages: [
        {
          id: "r1",
          title: "Golden Triangle Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image: RajasthanGoldenTriangle,
          price: 14999,
          originalPrice: 16000,
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "4 Nights Stay in Selected Standard Rooms for a Couple",
            "Daily Breakfast & Premium Dinners Included",
            "Welcome Drink (Non-Alcoholic) upon Arrival",
            "All Land Transfers and Sightseeing by Private AC Vehicle",
            "Dedicated Driver Allowances, Tolls, Fuel, and State Permits",
            "Child below 5 Years Stay Complimentary Sharing with Parents",
            "10% Discount Coupon for Additional Resort Laundry & Dining",
            "All Inclusive Government Service Taxes",
          ],
          cancellationPolicy: [
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi Arrival & Capital Sightseeing",
              meals: "Dinner",
              description:
                "Arrive at Delhi airport or station, meet our representative, and transfer to your hotel. After freshening up, head out for a sightseeing tour of New Delhi. Visit the historic Red Fort, India Gate, and the beautiful Lotus Temple, while driving past the grand Parliament House.",
            },
            {
              day: 2,
              title: "Delhi to Agra & Evening Taj Mahal Visit",
              meals: "Breakfast & Dinner",
              description:
                "Enjoy an early morning breakfast, check out, and take a smooth 4-hour drive to Agra via the Yamuna Expressway. Check into your hotel and relax. In the afternoon, explore the magnificent Taj Mahal and the historic sandstone structures of Agra Fort.",
            },
            {
              day: 3,
              title: "Agra to Jaipur via Fatehpur Sikri Stopover",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and drive toward Jaipur. Stop along the way at Akbar's ghost city, Fatehpur Sikri, to view the majestic Buland Darwaza gateway. Arrive in Jaipur, check in, and spend the evening shopping for textiles at Johari Bazaar.",
            },
            {
              day: 4,
              title: "Full Day Jaipur Royal Palace Tour",
              meals: "Breakfast & Dinner",
              description:
                "Dedicate your day to the gems of the Pink City. Ride up to the gates of Amber Fort, photograph the unique honeycomb facade of Hawa Mahal, and visit City Palace and the Jantar Mantar observatory. Enjoy a traditional ethnic Rajasthani resort dinner in the evening.",
            },
            {
              day: 5,
              title: "Jaipur to Delhi Return Departure",
              meals: "Breakfast",
              description:
                "After breakfast, view the beautiful floating palace of Jal Mahal. Settle into your private car for the return highway drive to Delhi. Arrive in the evening, with a direct transfer to the airport or station for your onward journey home.",
            },
          ],
          packageInfo:
            "The definitive cultural introduction to India. This 5-day Golden Triangle itinerary connects the architectural history of New Delhi, the iconic romantic white marble of the Taj Mahal in Agra, and the vibrant royal fortresses of the Pink City, Jaipur.",
          cities: ["Delhi", "Agra", "Jaipur", "Delhi"],
          duration: "5 Days & 4 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "r2",
          title: "Rajasthan Heritage Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image: RajasthanHeritage,
          price: 25999,
          originalPrice: 27999,
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "6 Nights Stay in Selected Heritage/Standard Accommodations",
            "Daily Morning Breakfasts & Deluxe Buffet Dinners",
            "Private AC Car for the Entire Inter-city Routing & Sightseeing",
            "Professional Driver Allowances, Toll Fees, Permits, and Parking",
            "Complimentary Stay for One Child Under 5 Sharing with Parents",
            "10% Extra Discount on In-house Hotel Food & Beverages",
            "All Inclusive Government Service Taxes",
          ],
          cancellationPolicy: [
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi Arrival & Leisure Evening",
              meals: "Dinner",
              description:
                "Arrive in Delhi where our team will greet you and transfer you to your hotel. Spend your evening relaxing or optionally visiting local heritage stepwells and Connaught Place markets to prepare for your extensive road journey.",
            },
            {
              day: 2,
              title: "Delhi to Agra Fort & Taj Mahal Tour",
              meals: "Breakfast & Dinner",
              description:
                "Drive down the expressway to Agra. Check into your hotel and head out to witness the grand Mughal architecture of Agra Fort. Spend a magical evening watching the sunset over the white domes of the Taj Mahal from across the Yamuna River.",
            },
            {
              day: 3,
              title: "Agra to Jaipur via Imperial Fatehpur Sikri",
              meals: "Breakfast & Dinner",
              description:
                "Depart Agra after breakfast. Stop at the ancient capital of Fatehpur Sikri to view its preserved royal courts and mosques. Continue your drive to Jaipur, checking into your hotel before exploring the brightly lit local markets.",
            },
            {
              day: 4,
              title: "Full Day Pink City Palace & Fort Excursion",
              meals: "Breakfast & Dinner",
              description:
                "Explore the historic Amber Fort, marvel at the facade of Hawa Mahal, and see the royal residential halls of City Palace. In the evening, enjoy a curated heritage dining experience complete with live Rajasthani folk dance and music.",
            },
            {
              day: 5,
              title: "Jaipur to Mandawa (Shekhawati Region)",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and drive into the unique Shekhawati region to reach Mandawa. Often called an open-air art gallery, spend your afternoon walking past historic havelis adorned with colorful, hand-painted murals.",
            },
            {
              day: 6,
              title: "Mandawa Haveli Walk & Return Drive to Delhi",
              meals: "Breakfast & Dinner",
              description:
                "Take a morning guided walk to discover Mandawa's hidden architecture and antique wooden doorways. In the afternoon, check out and enjoy a comfortable drive back to Delhi, checking into your hotel for your final night.",
            },
            {
              day: 7,
              title: "Delhi Hotel Check-out & Final Airport Transfer",
              meals: "Breakfast",
              description:
                "Savor your final breakfast at the hotel. Depending on your flight or train schedule, enjoy a short drive past India Gate and the President's House before being dropped off at the Delhi airport or station for your onward journey.",
            },
          ],
          packageInfo:
            "An immersive 7-day tour extending past the iconic Taj Mahal and Pink City into the semi-desert Shekhawati region. Explore Mandawa's world-famous painted havelis, fresco-carved mansions, and royal cenotaphs, offering a perfect window into rural Rajasthani heritage.",
          cities: ["Delhi", "Agra", "Jaipur", "Mandawa", "Delhi"],
          duration: "7 Days & 6 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "r3",
          title: "Royal Rajasthan Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image: RoyalRajasthan,
          price: 32499,
          originalPrice: 35000,
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "7 Nights Premium Hotel & Jungle Resort Accommodations",
            "Daily Morning Breakfasts & Deluxe Dinners Included",
            "Ranthambore National Park Jungle Safari Coordination Support",
            "Dedicated Private AC Sedan or SUV for the Entire Holiday Route",
            "Driver Allowances, Interstate Border Tolls, Fuel, and Parking Charges",
            "One Child under 5 Years Accommodated Free Sharing Parent's Bedding",
            "10% Extra Discount on Hotel Laundry, Food, and Spa Utilities",
            "All Standard Government Service Taxes",
          ],
          cancellationPolicy: [
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi Arrival & Monument Tour",
              meals: "Dinner",
              description:
                "Land in Delhi and enjoy a comfortable private transfer to your hotel. In the afternoon, visit iconic architectural sites like Qutub Minar, Humayun's Tomb, and India Gate before enjoying a relaxed dinner.",
            },
            {
              day: 2,
              title: "Delhi to Agra Fort Exploration",
              meals: "Breakfast & Dinner",
              description:
                "Take a morning drive along the expressway to Agra. Check into your hotel and spend the afternoon discovering the grand halls of Agra Fort, the primary historical residence of the Mughal emperors.",
            },
            {
              day: 3,
              title: "Taj Mahal Sunrise Tour & Drive to Ranthambore",
              meals: "Breakfast & Dinner",
              description:
                "Wake up early to catch the beautiful sunrise over the Taj Mahal. Return to the hotel for breakfast, check out, and drive down to the wild forests of Ranthambore National Park. Check into your jungle resort by evening.",
            },
            {
              day: 4,
              title: "Thrilling Ranthambore Tiger Safari",
              meals: "Breakfast & Dinner",
              description:
                "Set out on an exciting morning open-jeep or canter safari through Ranthambore's core zones. Keep an eye out for wild tigers, leopards, and marsh crocodiles. Spend a relaxed afternoon exploring the historic 10th-century Ranthambore Fort.",
            },
            {
              day: 5,
              title: "Ranthambore to Jaipur (The Pink City)",
              meals: "Breakfast & Dinner",
              description:
                "Enjoy a final breakfast at your jungle resort before checking out. Drive to Jaipur, check into your premium hotel, and spend a free evening exploring local handicraft markets or relaxing by the pool.",
            },
            {
              day: 6,
              title: "Full Day Guided Jaipur Palace Tour",
              meals: "Breakfast & Dinner",
              description:
                "Explore the beautiful Amber Fort, see the floating pavilions of Jal Mahal, and view the iconic facade of Hawa Mahal. Visit the historic City Palace and finish the evening with a traditional dinner at an ethnic resort.",
            },
            {
              day: 7,
              title: "Jaipur Market Walks & Return to Delhi",
              meals: "Breakfast & Dinner",
              description:
                "Spend your morning visiting the local artisan lanes of Bapu Bazaar for jewelry and textiles. After lunch, check out and relax on a comfortable drive back to Delhi, checking into your hotel late in the evening.",
            },
            {
              day: 8,
              title: "Delhi Hotel Check-out & Final Drop",
              meals: "Breakfast",
              description:
                "Enjoy breakfast at your hotel. Your private car will provide a direct transfer to the New Delhi Airport or Railway Station for your return flight home, wrapping up your vacation.",
            },
          ],
          packageInfo:
            "A regal 8-day itinerary designed for travelers who want to experience both history and nature. This premium loop covers the iconic monuments of Delhi and Agra, offers an exciting open-jeep wildlife safari in Ranthambore National Park to spot Royal Bengal Tigers, and concludes with a deep tour of royal Jaipur.",
          cities: ["Delhi", "Agra", "Ranthambore", "Jaipur", "Delhi"],
          duration: "8 Days & 7 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "r4",
          title: "Royal Rajasthan With Agra Tour",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image: RoyalRajasthanWithAgra,
          price: 36500,
          originalPrice: 38000,
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "8 Nights Accommodation across Quality Heritage & Standard Hotels",
            "Traditional Desert Tent Camping Experience with Camel Rides",
            "Daily Morning Breakfasts & 8 Delicious Buffet Dinners",
            "Private AC Vehicle for All Inter-city Transfers & Excursions",
            "All Driver Allowances, State Taxes, Tolls, and Parking Fees",
            "One Child under 5 Years Accommodated Free Sharing with Parents",
            "10% Discount Card valid for Hotel Food & Extra Laundry Services",
            "All Inclusive Government Service Taxes",
          ],
          cancellationPolicy: [
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi Arrival & Drive to Jaipur",
              meals: "Dinner",
              description:
                "Get picked up from Delhi airport or station by your private driver and head out on a comfortable road trip to Jaipur. Check into your hotel and spend a relaxed evening exploring local handicraft shops.",
            },
            {
              day: 2,
              title: "Jaipur Historic Forts & Palaces Tour",
              meals: "Breakfast & Dinner",
              description:
                "Explore the beautiful Amber Fort, see the floating pavilions of Jal Mahal, and view the iconic facade of Hawa Mahal. Visit the historic City Palace and finish the evening with a traditional dinner at an ethnic resort.",
            },
            {
              day: 3,
              title: "Jaipur to Bikaner Desert Citadels",
              meals: "Breakfast & Dinner",
              description:
                "Drive deeper into the desert regions to reach Bikaner. Check into your hotel and spend your afternoon exploring the grand Junagarh Fort, a massive structure that has never been captured in history.",
            },
            {
              day: 4,
              title: "Bikaner to the Golden City of Jaisalmer",
              meals: "Breakfast & Dinner",
              description:
                "Travel through the sweeping sands of the Thar Desert to reach Jaisalmer. Check into your hotel, catch a beautiful sunset view of the golden sandstone walls, and enjoy a relaxed evening dinner.",
            },
            {
              day: 5,
              title: "Jaisalmer Fort & Sam Dunes Desert Camping",
              meals: "Breakfast & Dinner",
              description:
                "Explore the living Jaisalmer Fort and its beautiful carved Jain temples. In the afternoon, head out to the Sam Sand Dunes. Enjoy a traditional camel safari ride, see the sunset over the dunes, and spend the night in a luxury desert tent with live folk music.",
            },
            {
              day: 6,
              title: "Jaisalmer to Pushkar Holy Lake Journey",
              meals: "Breakfast & Dinner",
              description:
                "Drive across the desert plains to the sacred town of Pushkar. Check into your hotel and take a peaceful evening walk around the holy Pushkar Lake and its Brahma Temple, one of the few dedicated to the deity in the world.",
            },
            {
              day: 7,
              title: "Pushkar to Agra via Fatehpur Sikri Stopover",
              meals: "Breakfast & Dinner",
              description:
                "Drive from Pushkar toward Agra today. Stop along the way at Akbar's ghost city, Fatehpur Sikri, to view the majestic Buland Darwaza gateway. Arrive in Agra, check in, and spend a relaxed evening at your hotel.",
            },
            {
              day: 8,
              title: "Taj Mahal Sightseeing & Drive to Delhi",
              meals: "Breakfast & Dinner",
              description:
                "Visit the magnificent Taj Mahal and the historic sandstone structures of Agra Fort. In the afternoon, enjoy a drive back to Delhi, stopping along the way to see the historic temples of Mathura and Vrindavan.",
            },
            {
              day: 9,
              title: "Delhi Check-out & Final Station / Airport Transfer",
              meals: "Breakfast",
              description:
                "Enjoy breakfast at your hotel. Your private car will provide a direct transfer to the New Delhi Airport or Railway Station for your return flight home, successfully wrapping up your vacation.",
            },
          ],
          packageInfo:
            "A grand 9-day tour that connects the classic highlights of India. Experience the palaces of Jaipur, the unique desert citadels of Bikaner and Jaisalmer, the sacred temples of Pushkar, and conclude your journey with a memorable visit to the Taj Mahal in Agra.",
          cities: [
            "Delhi",
            "Jaipur",
            "Bikaner",
            "Jaisalmer",
            "Pushkar",
            " Fatehpur Sikri",
            "Agra",
            "Mathura/ Vrindavan",
            "Delhi",
          ],
          duration: "9 Days & 8 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "r5",
          title: "Magnificent Rajasthan Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:MagnificentRajasthan,
          price: 39999,
          originalPrice: 44999,
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "9 Nights Stay in Premium Heritage & Standard Properties",
            "Daily Morning Breakfasts & Deluxe Buffet Dinners at All Resorts",
            "Private Comfort AC Sedan or SUV Car for the Entire 10-Day Journey",
            "All Driver Allowances, State Taxes, Tolls, and Parking Fees Covered",
            "One Child under 5 Years Accommodated Free Sharing Parent's Bedding",
            "10% Extra Discount on Hotel Laundry, Food, and Spa Utilities",
            "All Inclusive Government Service Taxes included",
          ],
          cancellationPolicy: [
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi Arrival & Capital Monument Tour",
              meals: "Dinner",
              description:
                "Land in Delhi and enjoy a comfortable private transfer to your hotel. In the afternoon, visit iconic architectural sites like Qutub Minar, Humayun's Tomb, and India Gate before enjoying a relaxed dinner.",
            },
            {
              day: 2,
              title: "Delhi to Agra Fort & Taj Mahal Sightseeing",
              meals: "Breakfast & Dinner",
              description:
                "Take a morning drive along the expressway to Agra. Check into your hotel and spend the afternoon discovering the grand halls of Agra Fort and the breathtaking white domes of the Taj Mahal.",
            },
            {
              day: 3,
              title: "Agra to Jaipur via Imperial Fatehpur Sikri",
              meals: "Breakfast & Dinner",
              description:
                "Depart Agra after breakfast. Stop at the ancient capital of Fatehpur Sikri to view its preserved royal courts and mosques. Continue your drive to Jaipur, checking into your hotel before exploring the brightly lit local markets.",
            },
            {
              day: 4,
              title: "Full Day Pink City Palace Experience",
              meals: "Breakfast & Dinner",
              description:
                "Explore the beautiful Amber Fort, see the floating pavilions of Jal Mahal, and view the iconic facade of Hawa Mahal. Visit the historic City Palace and finish the evening with a traditional dinner at an ethnic resort.",
            },
            {
              day: 5,
              title: "Jaipur to the Blue City of Jodhpur",
              meals: "Breakfast & Dinner",
              description:
                "Check out after breakfast and drive west to Jodhpur, the famous Blue City. Check into your hotel and spend a relaxed evening taking a walking tour through the old markets around the historic Clock Tower.",
            },
            {
              day: 6,
              title: "Mehrangarh Fort Tour & Drive to Udaipur",
              meals: "Breakfast & Dinner",
              description:
                "Explore the massive Mehrangarh Fort rising high above Jodhpur, and visit Jaswant Thada cenotaph. In the afternoon, start your scenic drive down toward the green Aravalli hills to reach Udaipur, the City of Lakes.",
            },
            {
              day: 7,
              title: "Udaipur Palaces & Romantic Lake Pichola Cruise",
              meals: "Breakfast & Dinner",
              description:
                "Discover the beautiful heritage architecture of Udaipur. Explore the massive City Palace complex along the waterfront and walk through Saheliyon-ki-Bari gardens. In the evening, enjoy a peaceful boat cruise on Lake Pichola.",
            },
            {
              day: 8,
              title: "Udaipur to Pushkar via Chittorgarh Fort",
              meals: "Breakfast & Dinner",
              description:
                "Drive from Udaipur toward Pushkar today. Stop along the way to see the massive Chittorgarh Fort, a legendary landmark of Rajput pride. Arrive in Pushkar by evening and check into your hotel.",
            },
            {
              day: 9,
              title: "Pushkar Lake Exploration & Return to Delhi",
              meals: "Breakfast & Dinner",
              description:
                "Take a morning walk around the holy Pushkar Lake and visit its rare Brahma Temple. After checking out, relax on a comfortable long-distance highway transfer back to Delhi, checking into your hotel by night.",
            },
            {
              day: 10,
              title: "Delhi Check-out & Final Station / Airport Transfer",
              meals: "Breakfast",
              description:
                "Enjoy breakfast at your hotel. Your private car will provide a direct transfer to the New Delhi Airport or Railway Station for your return flight home, successfully wrapping up your vacation.",
            },
          ],
          packageInfo:
            "A premium 10-day loop that covers the absolute best highlights of Rajasthan. Experience the iconic monuments of Delhi and Agra, explore the royal forts of Jaipur, visit the blue streets and Mehrangarh Fort of Jodhpur, and relax along the peaceful lakes of romantic Udaipur.",
          cities: [
            "Delhi",
            "Agra",
            "Jaipur",
            "Jodhpur",
            "Ranakpur Udaipur",
            "Delhi",
          ],
          duration: "10 Days & 9 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "r6",
          title: "Royal Rajasthan Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:RoyalRajasthanT,
          price: 39999,
          originalPrice: 44999,
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "9 Nights Premium Luxury Hotel, Resort & Desert Camp Stays",
            "Daily Morning Breakfasts & Delicious Buffets Dinners",
            "Traditional Camel Ride, Dune Safari & Live Desert Folk Event",
            "Ranthambore Tiger Safari Jeep Coordination Support",
            "Private Luxury AC Sedan or SUV for the Entire 10-Day Route",
            "All Driver Allowances, State Entry Tolls, Permits, and Parking Fees",
            "Complimentary Accommodation for One Child Under 5 Sharing Bedding",
            "All Applicable Service and Government Taxes",
          ],
          cancellationPolicy: [
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Delhi Arrival & Capital Monument Tour",
              meals: "Dinner",
              description:
                "Arrive at Delhi airport or station, meet our representative, and transfer to your hotel. After freshening up, head out for a sightseeing tour of New Delhi. Visit the historic Red Fort, India Gate, and the beautiful Lotus Temple, while driving past the grand Parliament House.",
            },
            {
              day: 2,
              title: "Delhi to Agra Fort & Taj Mahal Tour",
              meals: "Breakfast & Dinner",
              description:
                "Drive down the expressway to Agra. Check into your hotel and head out to witness the grand Mughal architecture of Agra Fort. Spend a magical evening watching the sunset over the white domes of the Taj Mahal from across the Yamuna River.",
            },
            {
              day: 3,
              title: "Agra to Jaipur via Imperial Fatehpur Sikri",
              meals: "Breakfast & Dinner",
              description:
                "Depart Agra after breakfast. Stop at the ancient capital of Fatehpur Sikri to view its preserved royal courts and mosques. Continue your drive to Jaipur, checking into your hotel before exploring the brightly lit local markets.",
            },
            {
              day: 4,
              title: "Full Day Pink City Palace Experience",
              meals: "Breakfast & Dinner",
              description:
                "Explore the beautiful Amber Fort, see the floating pavilions of Jal Mahal, and view the iconic facade of Hawa Mahal. Visit the historic City Palace and finish the evening with a traditional dinner at an ethnic resort.",
            },
            {
              day: 5,
              title: "Jaipur to Jaisalmer Thar Desert Camp",
              meals: "Breakfast & Dinner",
              description:
                "Drive west past beautiful desert sands to Jaisalmer. In the afternoon, head straight to your luxury desert camp at the Sam Sand Dunes. Enjoy a traditional camel safari ride, see the sunset over the dunes, and spend the night in a luxury tent with live folk music.",
            },
            {
              day: 6,
              title: "Jaisalmer Golden Fort to Jodhpur Blue City",
              meals: "Breakfast & Dinner",
              description:
                "Explore the living Jaisalmer Fort and its beautiful carved Jain temples. In the afternoon, take a comfortable driving transfer to Jodhpur, checking into your hotel and exploring the old markets around the historic Clock Tower.",
            },
            {
              day: 7,
              title: "Mehrangarh Fort Exploration & Drive to Udaipur",
              meals: "Breakfast & Dinner",
              description:
                "Explore the massive Mehrangarh Fort rising high above Jodhpur, and visit Jaswant Thada cenotaph. In the afternoon, start your scenic drive down toward the green Aravalli hills to reach Udaipur, the City of Lakes.",
            },
            {
              day: 8,
              title: "Udaipur Palace Tour & Pushkar Transit via Chittorgarh",
              meals: "Breakfast & Dinner",
              description:
                "Visit Udaipur's beautiful City Palace and take a morning cruise on Lake Pichola. In the afternoon, drive to Pushkar, stopping along the way to see the massive Chittorgarh Fort, a legendary landmark of Rajput pride. Check into your Pushkar hotel.",
            },
            {
              day: 9,
              title: "Pushkar Holy Lake to Ranthambore Tiger Woods",
              meals: "Breakfast & Dinner",
              description:
                "Take a morning walk around the holy Pushkar Lake and visit its rare Brahma Temple. After checking out, drive down to the wild forests of Ranthambore National Park and check into your premium jungle resort for a relaxing evening.",
            },
            {
              day: 10,
              title: "Morning Jungle Safari & Private Return Drop to Delhi",
              meals: "Breakfast",
              description:
                "Set out on an exciting morning open-jeep safari through Ranthambore to spot Royal Bengal Tigers. After breakfast, check out and enjoy a smooth return road transfer back to Delhi, concluding your grand 10-day tour.",
            },
          ],
          packageInfo:
            "The definitive full-circuit tour of Rajasthan. This 10-day grand journey connects the historic landmarks of Delhi and Agra with the absolute best of Rajasthan: the forts of Jaipur, desert dune camping in Jaisalmer, the blue lanes of Jodhpur, the romantic lakes of Udaipur, and an exciting tiger safari in Ranthambore.",
          cities: [
            "Delhi",
            "Agra",
            "Jaipur",
            "Jaisalmer",
            "Jodhpur",
            "Udaipur",
            "Chttorgarh",
            " Pushkar",
            "Ranthambore",
          ],
          duration: "10 Days & 9 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
      ],
    },
    {
      id: "goa",
      name: "Goa Tour Package",
      image:
        GoabannerImage,
      description:
        "A beach holiday in Goa that blends golden sands, water sports, seaside dining, and vibrant nightlife.",
      packages: [
        {
          id: "g1",
          title: "Goa Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            GoatourPackageImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "stay in respective room for a couple",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast in hotel",
            "Tea/Coffee Kettle in the Room",
            "North Goa Full Day Sightseeing",
            "South Goa Full Day Sightseeing",
            "Transfer and Sightseeing by AC Car",
            "Inclusive of all taxes",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–8 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival in Goa",
              meals: "Dinner",
              description:
                "Arrive Goa pick up our Representative assists to transfer to the Hotel.",
            },
            {
              day: 2,
              title: "Goa North Local Sightseeing",
              meals: "Breakfast",
              description:
                "After Breakfast Pickup From Hotel visit North Goa covering Famous beaches in North Goa. Beaches in Goa covered for the day are Calangute Beach, Anjuna Beach, vagator beach, it also covers fort Aguada. Candolim Beach , Baga Beach, optional places covered are Dolphin Trip in Sinquerim beach & snow park in Baga for which you have to pay directly at the counter. evening Backdrop to Hotel.",
            },
            {
              day: 3,
              title: "Goa South Local Sightseeing",
              meals: "Breakfast",
              description:
                "After Breakfast Pickup From Hotel Visit South Goa Sightseeing Mangueshi Temple , Old Goa Church, Miramar Beach , Balaji Temple , Church Square Panaji, St. Augustine Tower. & After Sightseeing Back drop to Hotel.",
            },
            {
              day: 4,
              title: "Goa Airport / Railway Station",
              meals: "Breakfast",
              description:
                "Morning After Breakfast Checkout From the Hotel. Drive to their Destination drop to Airport & Railway Station. as per time.",
            },
          ],
          packageInfo:
            "A laid-back Goan holiday with beach time, water sports, and lively nightlife in the state’s most popular beach towns.",
          cities: ["North Goa", "South Goa"],
          duration: "4 Days & 3 Nights",
          groupSize: "Max 25 Persons",
          bestSeason: "Nov - Feb",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "g2",
          title: "Goa Best Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            GoabesttourPackageImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "stay in respective room for a couple",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast in hotel",
            "Tea/Coffee Kettle in the Room",
            "North Goa Full Day Sightseeing",
            "South Goa Full Day Sightseeing",
            "Transfer and Sightseeing by AC Car",
            "Inclusive of all taxes",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–8 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival in Goa & North Local Sightseeing",
              meals: "Dinner",
              description:
                "Arrive Goa pick up our Representative assists to transfer to the Hotel. Take Some Rest & visit North Goa covering Famous beaches in North Goa. Beaches in Goa covered for the day are Calangute Beach, Anjuna Beach, vagator beach, it also covers fort Aguada. Candolim Beach , Baga Beach, optional places covered are Dolphin Trip in Sinquerim beach & snow park in Baga for which you have to pay directly at the counter. evening Backdrop to Hotel.",
            },
            {
              day: 2,
              title: "Goa South Local Sightseeing",
              meals: "Breakfast",
              description:
                "After Breakfast Pickup From Hotel Visit South Goa Sightseeing Mangueshi Temple , Old Goa Church, Miramar Beach , Balaji Temple , Church Square Panaji, St. Augustine Tower. & After Sightseeing Back drop to Hotel.",
            },
            {
              day: 3,
              title: "Goa Airport / Railway Station Drop",
              meals: "Breakfast",
              description:
                "Morning After Breakfast Checkout From the Hotel. Drive to their Destination drop to Airport & Railway Station. as per time.",
            },
          ],
          packageInfo:
            "A laid-back Goa holiday with beach time, water sports, and lively nightlife in the state’s most popular beach towns.",
          cities: ["North Goa", "South Goa"],
          duration: "3 Days & 2 Nights",
          groupSize: "Max 25 Persons",
          bestSeason: "Nov - Feb",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "g1",
          title: "Goa 5 Days Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            Goa5daysPackageImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "stay in respective room for a couple",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast in hotel",
            "Tea/Coffee Kettle in the Room",
            "North Goa Full Day Sightseeing",
            "South Goa Full Day Sightseeing",
            "Transfer and Sightseeing by AC Car",
            "Inclusive of all taxes",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–8 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival in Goa",
              meals: "Dinner",
              description:
                "Arrive Goa pick up our Representative assists to transfer to the Hotel.",
            },
            {
              day: 2,
              title: "Goa North Local Sightseeing",
              meals: "Breakfast",
              description:
                "After Breakfast Pickup From Hotel visit North Goa covering Famous beaches in North Goa. Beaches in Goa covered for the day are Calangute Beach, Anjuna Beach, vagator beach, it also covers fort Aguada. Candolim Beach , Baga Beach, optional places covered are Dolphin Trip in Sinquerim beach & snow park in Baga for which you have to pay directly at the counter. evening Backdrop to Hotel.",
            },
            {
              day: 3,
              title: "Goa South Local Sightseeing",
              meals: "Breakfast",
              description:
                "After Breakfast Pickup From Hotel Visit South Goa Sightseeing Mangueshi Temple , Old Goa Church, Miramar Beach , Balaji Temple , Church Square Panaji, St. Augustine Tower. & After Sightseeing Back drop to Hotel.",
            },
            {
              day: 4,
              title: "Dudhsagar Trip ON SIC",
              meals: "Breakfast",
              description:
                "Morning Breakfast Visit Dudhsagar Waterfalls Alone With Visit to Spice plantation on SIC. Evening Back to Hotel. Overnight Stay at Hotel.",
            },
            {
              day: 5,
              title: "Goa Airport / Railway Station",
              meals: "Breakfast",
              description:
                "Morning After Breakfast Checkout From the Hotel. Drive to their Destination drop to Airport & Railway Station. as per time.",
            },
          ],
          packageInfo:
            "A laid-back Goa holiday with beach time, water sports, and lively nightlife in the state’s most popular beach towns.",
          cities: ["North Goa", "South Goa", "Dudhsagar"],
          duration: "5 Days & 4 Nights",
          groupSize: "Max 25 Persons",
          bestSeason: "Nov - Feb",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
      ],
    },
    {
      id: "andaman",
      name: "Andaman Tour Packages",
      image:
        AndamanbannerImage,
      description:
        "Escape to the tropical paradise of Andaman & Nicobar, where crystal-clear waters meet pristine white-sand beaches.",
      packages: [
        {
          id: "ad1",
          title: "Andaman Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            AndamanTourPackageImage,
          price: 22999,
          originalPrice: 25000,
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "Accommodation in 01 Double Room",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast in hotel",
            "Airport Transfers and Sightseeing",
            "All kind of transport and luxury Taxes",
            "Assistance at all arrival and departure points",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–8 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title:
                "Arrival - Corbyn’s Cove - Cellular Jail Light & Sound Show",
              meals: "Dinner",
              description:
                "Arrival at Port Blair. Check-in to your hotel. Afternoon drive to Corbyn's Cove Beach for swimming. Evening witness the historic freedom struggle saga at the Cellular Jail Light and Sound Show. Overnight at Port Blair.",
            },
            {
              day: 2,
              title: "Port Blair to Havelock Island - Radhanagar Beach",
              meals: "Breakfast",
              description:
                "Morning ferry to Havelock Island. On arrival, check-in to your resort. Afternoon visit to Radhanagar Beach, ranked among Asia's best beaches by TIME Magazine. Enjoy a magical sunset. Overnight at Havelock Island.",
            },
            {
              day: 3,
              title: "Havelock Island - Excursion to Elephant Beach",
              meals: "Breakfast",
              description:
                "Travel to Elephant Beach by speed boat. Known for its calm shallow waters, it is perfect for beginner snorkelers and relaxing on pristine white sands. Overnight at Havelock Island.",
            },
            {
              day: 4,
              title: "Havelock Island to Port Blair",
              meals: "Breakfast",
              description:
                "Morning at leisure for local exploration. Afternoon check-out and transfer to Havelock Jetty to catch your return ferry to Port Blair. Check-in and overnight stay at Port Blair.",
            },
            {
              day: 5,
              title: "Ross Island & Port Blair City Tour",
              meals: "Breakfast",
              description:
                "Visit historic Ross Island, the ruined former British capital featuring friendly deer and ruins. Follow with a Port Blair city tour visiting the Samudrika Naval Marine Museum and Anthropological Museum. Overnight at Port Blair.",
            },
            {
              day: 6,
              title: "Departure from Port Blair",
              meals: "Breakfast",
              description:
                "After breakfast, check out from your hotel by 08:00 Hrs. Transfer to the airport to head home with wonderful island memories.",
            },
          ],
          packageInfo:
            "A classic introductory tour covering the essential highlights of Port Blair and Havelock Island over 6 unforgettable days.",
          cities: [
            "Port Blair",
            "Havelock Island",
            "Elephant Beach",
            "Port Blair",
          ],
          duration: "6 Days & 5 Nights",
          groupSize: "Max 25 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "ad2",
          title: "Andaman Island Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            AndamanIslandtourPackageImage,
          price: 17999,
          originalPrice: 19999,
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "Accommodation in 01 Double Room",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast in hotel",
            "Airport Transfers and Sightseeing",
            "All kind of transport and luxury Taxes",
            "Assistance at all arrival and departure points",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival - Corbyn's Cove Beach & Cellular Jail",
              meals: "Dinner",
              description:
                "Land in Port Blair. Visit the coconut-palm fringed Corbyn's Cove Beach in the afternoon. Later, attend the moving Light & Sound show at the Cellular Jail. Overnight at Port Blair.",
            },
            {
              day: 2,
              title: "Ferry to Havelock Island - Radhanagar Beach",
              meals: "Breakfast",
              description:
                "Board a morning ferry to Havelock Island. Check-in to your beach resort and spend the afternoon lounging or swimming at the scenic Radhanagar Beach. Overnight at Havelock Island.",
            },
            {
              day: 3,
              title: "Return Ferry to Port Blair",
              meals: "Breakfast",
              description:
                "Enjoy a free morning on Havelock Island. Check out and take the afternoon ferry back to Port Blair. Enjoy an evening of leisure or local souvenir shopping. Overnight at Port Blair.",
            },
            {
              day: 4,
              title: "Departure from Port Blair",
              meals: "Breakfast",
              description:
                "Check out at 08:00 Hrs after breakfast. Receive a direct transfer to the airport for your flight home.",
            },
          ],
          packageInfo:
            "The Deluxe quick getaway package designed for travelers looking to experience Andaman's top beach destination within a shorter time frame.",
          cities: [
            "Port Blair",
            "Havelock Island",
            "Radhanagar Beach",
            "Port Blair",
          ],
          duration: "4 Days & 3 Nights",
          groupSize: "Max 25 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "ad3",
          title: "Amazing Andaman Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            AmazingAndamantourPackageImage,
          price: 20999,
          originalPrice: 22999,
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "Accommodation in 01 Double Room",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast in hotel",
            "Airport Transfers and Sightseeing",
            "All kind of transport and luxury Taxes",
            "Assistance at all arrival and departure points",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival - Cellular Jail Exploration",
              meals: "Dinner",
              description:
                "Arrive in Port Blair, transfer to hotel. Afternoon visit to Corbyn's Cove Beach, followed by the historical Light and Sound show at Cellular Jail. Overnight at Port Blair.",
            },
            {
              day: 2,
              title: "Port Blair to Havelock Island - Radhanagar Beach",
              meals: "Breakfast",
              description:
                "Take the morning cruise ferry to Havelock Island. Check-in to your resort and spend a blissful afternoon swimming and relaxing at the world-renowned Radhanagar Beach. Overnight at Havelock Island.",
            },
            {
              day: 3,
              title: "Havelock Island Leisure Day & Return to Port Blair",
              meals: "Breakfast",
              description:
                "Morning free to enjoy beach strolls or optional water sports. Afternoon check-out and boarding of the return ferry back to Port Blair. Overnight at Port Blair.",
            },
            {
              day: 4,
              title: "Port Blair Museums & Local Insights",
              meals: "Breakfast",
              description:
                "Embark on a city tour featuring the Samudrika Marine Museum, Anthropological Museum, and local markets to buy handicrafts and sea-shell souvenirs. Overnight at Port Blair.",
            },
            {
              day: 4,
              title: "Airport Drop & Departure",
              meals: "Breakfast",
              description:
                "After breakfast, check out from the hotel by 08:00 Hrs and proceed to the airport for your onward journey.",
            },
          ],
          packageInfo:
            "An amazing 5-day journey curated to give you an immersive island experience without feeling rushed.",
          cities: [
            "Port Blair",
            "Havelock Island",
            "Radhanagar Beach",
            "Port Blair",
          ],
          duration: "5 Days & 4 Nights",
          groupSize: "Max 25 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "ad4",
          title: "Adventurous Andaman Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            AdventurousAndamantourPackageImage,
          price: 24999,
          originalPrice: 25999,
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "Accommodation in 01 Double Room",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast in hotel",
            "Airport Transfers and Sightseeing",
            "All kind of transport and luxury Taxes",
            "Assistance at all arrival and departure points",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival - Port Blair Beach & Historical Tour",
              meals: "Dinner",
              description:
                "Arrive at Port Blair. Check-in to hotel. Spend the afternoon at Corbyn's Cove Beach and finish your evening at the Cellular Jail Light & Sound Show. Overnight at Port Blair.",
            },
            {
              day: 2,
              title: "Ferry to Havelock Island - Radhanagar Beach",
              meals: "Breakfast",
              description:
                "Board the luxury morning ferry to Havelock Island. Check-in to your resort and spend the afternoon taking in the pristine beauty of Radhanagar Beach. Overnight at Havelock Island.",
            },
            {
              day: 3,
              title: "Havelock Island - Elephant Beach Adventures",
              meals: "Breakfast",
              description:
                "Take a speed boat ride to Elephant Beach. Spend the day engaging in water sports like snorkeling, sea walking, or glass-bottom boat rides in its clear shallow reefs. Overnight at Havelock Island.",
            },
            {
              day: 4,
              title: "Havelock Island to Neil Island Exploration",
              meals: "Breakfast",
              description:
                "Take an early afternoon ferry from Havelock to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach, known for coral viewing and natural rock formations. Overnight at Neil Island.",
            },
            {
              day: 5,
              title: "Neil Island to Port Blair - Ross Island Visit",
              meals: "Breakfast",
              description:
                "Catch the return ferry to Port Blair. In the afternoon, head out to Ross Island for a nature walk among friendly deer and historic British colonial ruins. Overnight at Port Blair.",
            },
            {
              day: 6,
              title: "Departure Flight from Port Blair",
              meals: "Breakfast",
              description:
                "Following breakfast, check out by 08:00 Hrs and transfer to the airport for your flight home.",
            },
          ],
          packageInfo:
            "Tailored for thrill-seekers and nature lovers, this comprehensive itinerary covers three distinct islands with ample opportunities for water adventures.",
          cities: [
            "Port Blair",
            "Havelock Island",
            "Elephant Beach",
            "Neil Island",
            "Port Blair",
          ],
          duration: "6 Days & 5 Nights",
          groupSize: "Max 25 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
      ],
    },
    {
      id: "northeast",
      name: "North East Tour Package",
      image:
        NotheastbannerImage,
      description:
        "A cultural explorer through Northeast India with waterfalls, living root bridges, tribal villages and wildlife.",
      packages: [
        {
          id: "ne1",
          title: "Darjeeling Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            DarjeelingtourPackageImage,
          price: 13499,
          originalPrice: 15000,
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "stay in respective room for a couple",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea/Coffee Kettle in the Room",
            "Pick Up and Drop From Bagdogra Airport",
            "Transfer and Sightseeing by Non Ac Vehicle",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Bagdogra / New Jalpaiguri - Darjeeling",
              meals: "Dinner",
              description:
                "Meet and greet on arrival at Bagdogra/New Jalpaiguri. Transfer to Darjeeling, one of the most magnificent hill resorts in the world. Evening free to explore the local markets at The Mall and enjoy the crisp mountain air. Dinner and overnight stay at hotel.",
            },
            {
              day: 2,
              title: "Darjeeling Sightseeing & Transfer to Gangtok",
              meals: "Breakfast",
              description:
                "Early morning visit to Tiger Hill for a spectacular sunrise over Mt. Kanchenjunga. On the way back, see Ghoom Monastery and Batasia Loop. After breakfast, visit the Himalayan Mountaineering Institute, Zoo, and a local Tea Garden before driving to Gangtok. Check-in and overnight stay.",
            },
            {
              day: 3,
              title: "Excursion Trip to Tsomgo Lake",
              meals: "Breakfast",
              description:
                "Embark on an excursion to the sacred Tsomgo Lake, situated at 12,400 feet. Absorb the oval-shaped lake's serene beauty and alpine views. Return to Gangtok for an evening of leisurely shopping at MG Marg. Overnight stay.",
            },
            {
              day: 4,
              title: "Gangtok Local Sightseeing",
              meals: "Breakfast",
              description:
                "Spend the day uncovering Gangtok's spiritual landmarks, including the Enchey Monastery, Do Drul Chorten Stupa, and the Research Institute of Tibetology. Enjoy a panoramic viewpoint of the valley. Overnight stay.",
            },
            {
              day: 5,
              title: "Sikkim Local Culture & Craft Exploration",
              meals: "Breakfast",
              description:
                "Visit the Directorate of Handicrafts & Handloom to see local artisans at work, followed by a trip to the Flower Exhibition Centre. Spend your final evening enjoying local Sikkimese cuisine. Overnight stay.",
            },
            {
              day: 6,
              title: "Gangtok - Departure to Bagdogra / NJP",
              meals: "Breakfast",
              description:
                "After breakfast, check out from your hotel. Transfer back to Bagdogra Airport or New Jalpaiguri Railway Station for your onward departure journey with wonderful mountain memories.",
            },
          ],
          packageInfo:
            "A comprehensive 6-day itinerary taking you deep into the culture and natural splendor of Darjeeling and the capital city of Sikkim, Gangtok.",
          cities: ["Darjeeling", " Gangtok", "Tsomgo Lake", "Gangtok"],
          duration: "6 Days & 5 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "ne2",
          title: "Darjeeling & Gangtok Escape",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
           DarjeelingGangtokescapeImage,
          price: 17999,
          originalPrice: 19999,
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "stay in respective room for a couple",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea/Coffee Kettle in the Room",
            "Pick Up and Drop From Bagdogra Airport",
            "Transfer and Sightseeing by Non Ac Vehicle",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival & Transfer to Darjeeling",
              meals: "Dinner",
              description:
                "Arrive at Bagdogra/NJP and receive a scenic mountain escort up to Darjeeling. Check into your hotel and enjoy a peaceful evening strolling through the vibrant Mall Road area. Dinner and overnight stay.",
            },
            {
              day: 2,
              title: "Darjeeling Highlights & Drive to Gangtok",
              meals: "Breakfast",
              description:
                "Catch the 4:00 AM sunrise over Kanchenjunga from Tiger Hill. Visit Ghoom Monastery and Batasia Loop. Return to the hotel for breakfast, check out, and drive down through the Teesta valley up to Gangtok. Overnight stay.",
            },
            {
              day: 3,
              title: "Excursion to Sacred Tsomgo Lake",
              meals: "Breakfast",
              description:
                "Morning drive to the high-altitude Tsomgo Lake. Admire the stunning snow-capped backdrop and choose to take a yak ride. Return to Gangtok for evening shopping and café hopping along MG Marg. Overnight stay.",
            },
            {
              day: 4,
              title: "Gangtok - Bagdogra / NJP Departure",
              meals: "Breakfast",
              description:
                "After breakfast, check out from the hotel. Drive down to Bagdogra Airport or New Jalpaiguri station according to your departure travel schedule. Tour concludes.",
            },
          ],
          packageInfo:
            "The perfect short getaway package designed for travelers looking to witness the best sights of Darjeeling and Gangtok in a limited time frame.",
          cities: ["Darjeeling", "Gangtok", "Tsomgo Lake", "Gangtok"],
          duration: "4 Days & 3 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "ne3",
          title: "Amazing Darjeeling & Sikkim Tour",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
           AmazingDarjeelingSikkimImage,
          price: 20999,
          originalPrice: 22000,
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "stay in respective room for a couple",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea/Coffee Kettle in the Room",
            "Pick Up and Drop From Bagdogra Airport",
            "Transfer and Sightseeing by Non Ac Vehicle",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Bagdogra / NJP to Darjeeling Hill Station",
              meals: "Dinner",
              description:
                "Upon arrival, meet our representative and drive up to Darjeeling through beautiful tea fields. Spend the evening relaxing or exploring Chowrasta Square to soak in the local vibe. Overnight stay.",
            },
            {
              day: 2,
              title: "Sunrise Tour & Darjeeling City Exploration",
              meals: "Breakfast",
              description:
                "Wake early for the Tiger Hill sunrise over the Himalayas. Explore Ghoom Monastery and the Batasia Loop. Following breakfast, visit the Himalayan Mountaineering Institute, PNZ Zoological Park, and a lush tea plantation. Overnight stay.",
            },
            {
              day: 3,
              title: "Scenic Transfer to Gangtok",
              meals: "Breakfast",
              description:
                "After a relaxed breakfast, check out and journey toward Gangtok, tracing the picturesque Teesta River. Check into your Sikkim resort and enjoy a free evening exploring the local mountain culture. Overnight stay.",
            },
            {
              day: 4,
              title: "High Altitude Tsomgo Lake Excursion",
              meals: "Breakfast",
              description:
                "Travel up to 12,400 feet to visit the pristine, holy Tsomgo Lake, surrounded by rugged alpine mountains. Return to Gangtok for an evening of individual activities and souvenir shopping. Overnight stay.",
            },
            {
              day: 5,
              title: "Departure from Gangtok to Airport/NJP",
              meals: "Breakfast",
              description:
                "Check out at 08:00 Hrs after breakfast. Enjoy a final look at the green valleys during your descent transfer back to Bagdogra Airport or NJP station for your flight home.",
            },
          ],
          packageInfo:
            "An amazing, well-balanced holiday package taking you across the prominent lookouts, monasteries, and valleys of Darjeeling and Gangtok.",
          cities: ["Darjeeling", "Gangtok", "Tsomgo Lake", "Gangtok"],
          duration: "5 Days & 4 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "ne4",
          title: "Deluxe Darjeeling & Sikkim Tour",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
           DeluxeDarjeelingSikkimImage,
          price: 24999,
          originalPrice: 25999,
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "stay in respective room for a couple",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea/Coffee Kettle in the Room",
            "Pick Up and Drop From Bagdogra Airport",
            "Transfer and Sightseeing by Non Ac Vehicle",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Welcome Arrival - Transfer to Darjeeling",
              meals: "Dinner",
              description:
                "Arrive at NJP or Bagdogra and proceed through winding roads to the historic hill town of Darjeeling. Check into your deluxe room and spend the evening enjoying an ambient walk through The Mall. Overnight stay.",
            },
            {
              day: 2,
              title: "Tiger Hill Sunrise & Local Sightseeing",
              meals: "Breakfast",
              description:
                " Experience the famous early morning sunrise over Kanchenjunga from Tiger Hill. Return via Ghoom Monastery and Batasia Loop. Post-breakfast, visit Tenzing Rock, the Tibetan Self Help Refuge Centre, and the serene Peace Pagoda. Overnight stay.",
            },
            {
              day: 3,
              title: "Darjeeling to Gangtok Mountain Drive",
              meals: "Breakfast",
              description:
                "Check out after breakfast and take a scenic route to Gangtok, the capital of Sikkim. Upon arrival, check in to your hotel and spend the afternoon at leisure, discovering the local lifestyle around town. Overnight stay.",
            },
            {
              day: 4,
              title: "Tsomgo Lake & Baba Mandir Excursion",
              meals: "Breakfast",
              description:
                "Set off on a day-trip to the deep oval waters of Tsomgo Lake and continue further uphill to visit the sacred Baba Harbhajan Singh Memorial Mandir. Return to Gangtok for a relaxed evening. Overnight stay.",
            },
            {
              day: 5,
              title: "Gangtok Points of Interest & Culture Tour",
              meals: "Breakfast",
              description:
                "Discover Gangtok's architectural and natural heritage, visiting the Do Drul Chorten Stupa, the Namgyal Institute of Tibetology, and the colorful Flower Exhibition Centre. Enjoy your final evening relaxing at MG Marg. Overnight stay.",
            },
            {
              day: 6,
              title: "Final Departure from Gangtok",
              meals: "Breakfast",
              description:
                "Check out at 08:00 Hrs following breakfast. Bid farewell to the hills as you are transferred back down to Bagdogra Airport or NJP station for your return journey.",
            },
          ],
          packageInfo:
            "A deluxe itinerary crafting a deeply immersive experience across Darjeeling and Gangtok, adding a special excursion up to the historic Baba Harbhajan Singh Mandir.",
          cities: [
            "Darjeeling",
            "Gangtok",
            "Tsomgo Lake",
            "Baba Mandir",
            "Gangtok",
          ],
          duration: "6 Days & 5 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
      ],
    },
    {
      id: "gujarat",
      name: "Gujarat Tour Packages",
      image:
       GujaratHeroImage,
      description:
        "Journey through Gujarat’s timeless beauty with historic cities, sacred temples, the stunning White Rann, traditional handicrafts, and authentic local cuisine.",
      packages: [
        {
          id: "gr1",
          title: "Family Gujarat Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
           GujaratFamilyPackageImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "stay in respective room for a couple",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea/Coffee Kettle in the Room",
            "Pick Up and Drop From Ahmedabad Airport / Railway Station",
            "Transfer and Sightseeing by Non Ac Vehicle",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Ahmedabad – Dwarka (450km / 8hrs)",
              meals: "Dinner",
              description:
                "Today, proceed to the sacred town of Dwarka. On arrival, check into your hotel. Later, visit the holy Dwarkadhish Temple and take a peaceful dip in the Gomti river. Overnight stay at the hotel.",
            },
            {
              day: 2,
              title: "Dwarka - Excursion to Bet Dwarka",
              meals: "Breakfast",
              description:
                "In the morning, travel to visit Nageshwar Jyotirling, Gopi Talav, and take a ferry to Bet Dwarka. On the way back, visit Rukmani Temple. Attend the magical evening aarti at Dwarkadhish temple. Overnight stay at the hotel.",
            },
            {
              day: 3,
              title: "Dwarka – Porbandar – Somnath (200km / 4hrs)",
              meals: "Breakfast",
              description:
                "Depart for Porbandar to visit Kirti Mandir (Mahatma Gandhi's birthplace) and Sudama Temple. Continue to Somnath to visit Bhalka Tirth, Triveni Sangam, and the grand Somnath Temple. Witness the evening Light and Sound show. Overnight stay at the hotel.",
            },
            {
              day: 4,
              title: "Somnath – Virpur – Gondal – Rajkot (200km / 4hrs)",
              meals: "Breakfast",
              description:
                "Drive to Rajkot. En route, explore the historic Junagadh Fort, pay respects at the Jalaram Temple in Virpur, and tour the majestic Navlakha Palace and Vintage Car Museum at Gondal. Arrive at Rajkot for an overnight stay.",
            },
            {
              day: 5,
              title: "Rajkot – Akshardham – Ahmedabad (230km / 4hrs)",
              meals: "Breakfast",
              description:
                "Return to Ahmedabad. Upon arrival, explore the architectural wonder of Adalaj Stepwell, the majestic Akshardham Temple, and the serene Sabarmati Gandhi Ashram. Evening drop-off at the railway station or airport.",
            },
          ],
          packageInfo:
            "A well-paced 5-day family circuit covering the essential spiritual gems of Western Gujarat, starting and ending at Ahmedabad.",
          cities: ["Ahmedabad", "Dwarka", "Somnath", " Rajkot", "Ahmedabad"],
          duration: "5 Days & 4 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "gr2",
          title: "Dwarka Somnath Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            DwarkaSomnathPackageImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "Stay In Respective Room",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea/Coffee Kettle in the Room",
            "Pick Up and Drop From Ahmedabad Airport / Railway Station",
            "Transfer and Sightseeing by Non Ac Vehicle",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrive Ahmedabad",
              meals: "Dinner",
              description:
                "Welcome to Ahmedabad. Our representative will escort you to your hotel. Spend your evening exploring the local Gujarati handicraft markets or relaxing at the Sabarmati Riverfront. Overnight stay.",
            },
            {
              day: 2,
              title: "Ahmedabad to Dwarka (410 Kms / 7.5 Hrs)",
              meals: "Breakfast",
              description:
                "After an early breakfast, take a scenic drive down to the ancient shoreline city of Dwarka. Check into your hotel and spend the evening visiting the magnificent Dwarkadhish temple complex. Overnight stay.",
            },
            {
              day: 3,
              title: "Dwarka Local Sightseeing",
              meals: "Breakfast",
              description:
                "Take a morning boat ride to Bet Dwarka island temple. Visit the Nageshwar Jyotirling, Gopi Talav lake, and Rukmani Devi Temple. Enjoy the spectacular evening coastal sunset near the lighthouse. Overnight stay.",
            },
            {
              day: 4,
              title: "Dwarka – Somnath via Porbandar (230 Kms / 4.5 Hrs)",
              meals: "Breakfast",
              description:
                "Drive down the coastal highway to Somnath. Stop at Porbandar to view Kirti Mandir. Upon arrival in Somnath, check in and visit the holy Jyotirlinga on the edge of the Arabian Sea. Watch the spectacular Light & Sound show. Overnight stay.",
            },
            {
              day: 5,
              title: "Somnath – Diu (90 Kms / 2 Hrs)",
              meals: "Breakfast",
              description:
                "Travel to the beautiful beach island of Diu. Check into your resort and spend your afternoon visiting the historic Portuguese Diu Fort, St. Paul's Church, and unwinding on the shores of Nagoa Beach. Overnight stay.",
            },
            {
              day: 6,
              title: "Diu – Sasan Gir – Junagadh (150 Kms / 3.5 Hrs)",
              meals: "Breakfast",
              description:
                "Travel to the beautiful beach island of Diu. Check into your resort and spend your afternoon visiting the historic Portuguese Diu Fort, St. Paul's Church, and unwinding on the shores of Nagoa Beach. Overnight stay.",
            },
            {
              day: 7,
              title: "Junagadh – Ahmedabad (320 Kms / 6 Hrs)",
              meals: "Breakfast",
              description:
                "Explore the majestic Uparkot Fort and the fascinating Mahabat Maqbara architecture in Junagadh. Afterward, begin your return drive to Ahmedabad. Check in and enjoy a relaxed final night in the city. Overnight stay.",
            },
            {
              day: 8,
              title: "Ahmedabad City Tour & Departure",
              meals: "Breakfast",
              description:
                "Conclude your holiday with a heritage tour of the Adalaj Stepwell and Gandhi Ashram. Later, transfer directly to Ahmedabad Airport or the Railway Station for your departure journey home.",
            },
          ],
          packageInfo:
            "A grand 8-day experiential tour designed to seamlessly balance spiritual temple visits with the scenic beaches of Diu and the wilderness of Sasan Gir.",
          cities: [
            "Ahmedabad",
            "Dwarka",
            "Somnath",
            "Diu",
            "Junagadh",
            "Ahmedabad",
          ],
          duration: "8 Days & 7 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "gr3",
          title: "Gujarat Honeymoon Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            GujaratHoneymoonPackageImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "stay in respective room for a couple",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea/Coffee Kettle in the Room",
            "Pick Up and Drop From Ahmedabad Airport / Railway Station",
            "Transfer and Sightseeing by Non Ac Vehicle",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrive Ahmedabad - Romantic Evening",
              meals: "Dinner",
              description:
                "Arrive in Ahmedabad and transfer to your hotel. Enjoy a cozy, romantic dinner cruise or evening walk along the Sabarmati Riverfront to celebrate the beginning of your special journey together. Overnight stay.",
            },
            {
              day: 2,
              title: "Ahmedabad to Bhuj (330 Kms / 6.5 Hrs)",
              meals: "Breakfast",
              description:
                "Travel across the changing terrains toward the historic town of Bhuj. Check into your hotel. Spend your evening seeing the majestic royal architecture of the Swaminarayan Temple beautifully lit up at night. Overnight stay.",
            },
            {
              day: 3,
              title: "Bhuj Heritage Exploration",
              meals: "Breakfast",
              description:
                "Spend the day visiting the mirrors of Aina Mahal, the Italian-gothic Prag Mahal Palace, and the serene Sharad Baug Palace. Walk around Hamirsar Lake for a lovely sunset view. Overnight stay.",
            },
            {
              day: 4,
              title: "Bhuj to Hodka / Dhordo (White Rann Gateway)",
              meals: "Breakfast",
              description:
                "Drive into the heart of the desert plains towards Hodka or Dhordo. Check into traditional, luxury mud-cottages (Bhungas). In the afternoon, head out to the spectacular Great Rann of Kutch to witness a magical sunset over the endless white salt desert. Overnight stay.",
            },
            {
              day: 5,
              title: "Kalo Dungar & Traditional Craft Villages",
              meals: "Breakfast",
              description:
                "Travel up to Kalo Dungar (Black Hill), the highest point in Kutch, for a breathtaking panoramic view of the India-Pakistan border. On the way back, visit local artisan villages to see beautiful Rogan art and Kutchi embroidery. Overnight stay.",
            },
            {
              day: 6,
              title: "Gateway to Nakhatrana Nature Reserve",
              meals: "Breakfast",
              description:
                "Journey westward towards Nakhatrana. Explore the rugged landscapes, visit the ancient rock structures of Chhari Dhandh wetlands, or take a peaceful nature walk through the serene countryside. Overnight stay.",
            },
            {
              day: 7,
              title: "Nakhatrana to Mandvi Beachside Escape",
              meals: "Breakfast",
              description:
                "Drive down to the tranquil coastal town of Mandvi. Visit the beautiful Vijay Vilas Palace, a famous backdrop for Bollywood romances. Spend your evening walking hand-in-hand along the private, pristine sands of Mandvi beach. Overnight stay.",
            },
            {
              day: 8,
              title: "Mandvi to Ahmedabad - Final Departure",
              meals: "Breakfast",
              description:
                "After a relaxed beachside breakfast, begin your return drive to Ahmedabad. Stop briefly at Bhujodi craft village for souvenir shopping. Transfer to Ahmedabad Airport or Railway station for your journey home.",
            },
          ],
          packageInfo:
            "A deeply romantic, customized 8-day itinerary taking couples away from the crowds into the dreamy, culturally rich landscapes of Kutch and the serene beaches of Mandvi.",
          cities: [
            "Ahmedabad",
            " Kutch",
            " Bhuj ",
            " Hodka/Dhordo",
            "Nakhatrana",
            " Mandvi",
            "Ahmedabad",
          ],
          duration: "8 Days & 7 Nights",
          groupSize: "Max 12 Persons",
          bestSeason: "Oct - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
      ],
    },
    {
      id: "lehdakhak",
      name: "Leh Ladakh Tour Packages",
      image: LehLadakhHeroImage,
      description:
        "A spectacular Himalayan adventure across Leh Ladakh with snow-capped peaks, desert valleys, ancient monasteries, scenic lakes, and thrilling mountain journeys.",
      packages: [
        {
          id: "l1",
          title: "Ladakh Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            LadakhtourPakageImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.9,
          discountPercentage: 25,
          inclusions: [
            "Stay In Respective Room",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea Kettle in the Room",
            "Pick Up and Drop From Leh.",
            "Transfer & Sightseeing in Pvt. cab",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival at Leh - Acclimatization Day",
              meals: "Dinner",
              description:
                "After a relaxed breakfast, head out to explore Shey Palace, Thiksey Monastery, and the Stok Palace Museum. After lunch, embark on a scenic drive to visit the Hall of Fame, Kali Mata Temple (Guardians Temple) in Spituk Monastery, Gurudwara Pathar Sahib, Magnetic Hill, and the Sangam (the confluence of the Indus and Zanskar rivers). Return to the hotel for an overnight stay.",
            },
            {
              day: 2,
              title: "Leh local sightseeing.",
              meals: "Breakfast",
              description:
                "After a relaxed breakfast, head out to explore Shey Palace, Thiksey Monastery, and the Stok Palace Museum. After lunch, embark on a scenic drive to visit the Hall of Fame, Kali Mata Temple (Guardians Temple) in Spituk Monastery, Gurudwara Pathar Sahib, Magnetic Hill, and the Sangam (the confluence of the Indus and Zanskar rivers). Return to the hotel for an overnight stay.",
            },
            {
              day: 3,
              title: "Leh - Khardungla - Leh",
              meals: "Breakfast",
              description:
                "In the morning, embark on an exciting excursion to Khardung La, the highest motorable pass in the world at an altitude of 18,380 ft. (80 km round trip). It is also recorded in the Guinness World Records. After returning, enjoy the rest of the day at your leisure, with the opportunity to explore the local markets and shop for souvenirs. Overnight stay at the hotel.",
            },
            {
              day: 4,
              title: "Drop to Leh Airport.",
              meals: "Breakfast",
              description:
                "After breakfast, check out from the hotel and proceed to Leh Airport for your onward journey.",
            },
          ],
          packageInfo:
            "A compact 4-day introductory tour prioritizing proper high-altitude acclimatization alongside essential local sightseeing and market exploration in Leh.",
          cities: ["Leh", "Khardungla", "Leh"],
          duration: "4 Days & 3 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "May - Sep",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "l2",
          title: "Leh Sightseeing Tour Packages",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            LehSightseeingtourPakageImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.7,
          discountPercentage: 25,
          inclusions: [
            "Stay In Respective Room",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea Kettle in the Room",
            "Pick Up and Drop From Leh.",
            "Transfer & Sightseeing in Pvt. cab",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival at Leh - Acclimatization Day",
              meals: "Dinner",
              description:
                "Arrive in Leh in the morning and proceed to your hotel for check-in. Spend the day at leisure to allow your body to adjust to the high altitude of Leh (11,500 ft / 3500 m). Rest and relax to ensure proper acclimatization. Overnight stay at the hotel.",
            },
            {
              day: 2,
              title: "Leh Local Sightseeing & Confluence Tour",
              meals: "Breakfast",
              description:
                "After a relaxed breakfast, explore Shey Palace, Thiksey Monastery, and Stok Palace Museum. Later, drive down the highway to see the Hall of Fame military museum, Gurudwara Pathar Sahib, Magnetic Hill, and the stunning Indus & Zanskar River Sangam. Overnight at Leh.",
            },
            {
              day: 3,
              title: "Leh - Pangong Lake - Leh Day-Trip",
              meals: "Breakfast",
              description:
                "Enjoy a full-day trip to Pangong Lake, located about 300 km round trip on the Indo-China Border. On the way, you'll cross the breathtaking Chang La Pass, standing at 17,370 ft. Take your time to explore the stunning lake and its serene surroundings. After a memorable visit, head back to Leh, reaching by late afternoon or evening. Return to the hotel for a relaxing overnight stay.",
            },
            {
              day: 4,
              title: "Leh - Khardungla Pass Excursion",
              meals: "Breakfast",
              description:
                "Drive uphill to the legendary Khardung La Pass, measuring 18,380 ft above sea level. Take photos at the peak overlooking the Zanskar range. Descend to Leh for a free afternoon of souvenir shopping at the local Tibetan markets. Overnight at Leh.",
            },
            {
              day: 5,
              title: "Drop to Leh Airport",
              meals: "Breakfast",
              description:
                "After an early breakfast, check out from the hotel and proceed to the airport for your flight back home, concluding your unforgettable trip to Leh.",
            },
          ],
          packageInfo:
            "A well-paced 5-day package that balances essential monastic valley tours with adventurous excursions to Ladakh's two most famous natural landmarks.",
          cities: ["Leh", "Pangong Lake", "Khardungla", "Leh"],
          duration: "5 Days & 4 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "May - Sep",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "l3",
          title: "Gems of Leh Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
            GemsofLehtourImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.8,
          discountPercentage: 25,
          inclusions: [
            "Stay In Respective Room",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea Kettle in the Room",
            "Pick Up and Drop From Leh.",
            "Transfer & Sightseeing in Pvt. cab",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival at Leh - Mandatory Altitude Rest",
              meals: "Dinner",
              description:
                "Arrive at Leh airport and transfer to your hotel. Total rest is required during the first day to successfully adjust to Ladakh's high-altitude climate. Take a light walk around the hotel lanes in the evening. Overnight at Leh.",
            },
            {
              day: 2,
              title: "Leh Monasteries & Hall of Fame Tour",
              meals: "Breakfast",
              description:
                "Enjoy breakfast before exploring Shey Palace, Thiksey Monastery, and Stok Palace. Spend your afternoon traversing the Indus valley highway to experience the Hall of Fame, Magnetic Hill, and the Indus-Zanskar confluence point. Overnight at Leh.",
            },
            {
              day: 3,
              title: "Leh to Nubra Valley via Khardung La Pass",
              meals: "Breakfast",
              description:
                "Drive north across the majestic Khardung La Pass (18,380 ft) to enter the striking Nubra Valley. Check into your deluxe valley camp or hotel. In the evening, visit the scenic Hunder Sand Dunes to enjoy a ride on the rare double-humped Bactrian camels. Overnight in Nubra Valley.",
            },
            {
              day: 4,
              title: "Nubra Valley Sightseeing to Leh Return",
              meals: "Breakfast",
              description:
                "Visit the iconic Diskit Monastery, featuring the towering 106-foot statue of Maitreya Buddha overlooking the Shyok River valley. Following your visit, begin your return mountain drive across Khardung La back to Leh. Overnight stay at Leh.",
            },
            {
              day: 5,
              title: "Leh Leisure & Market Exploration Day",
              meals: "Breakfast",
              description:
                "A full free day to relax at your own pace or explore Leh town. Visit the historic Leh Palace, enjoy panoramic views from Shanti Stupa, or purchase authentic carpets and pashminas in the local markets. Overnight at Leh.",
            },
            {
              day: 6,
              title: "Drop to Leh Airport",
              meals: "Breakfast",
              description:
                "Bid farewell to Ladakh. Following an early breakfast, check out of your hotel and transfer directly to the Leh Airport for your return flight home.",
            },
          ],
          packageInfo:
            "An experiential 6-day mountain circuit featuring an immersive overnight eco-camping experience in the cold desert landscapes of the Nubra Valley.",
          cities: ["Leh", "Khardungla", "Nubra Valley", "Leh"],
          duration: "6 Days & 5 Nights",
          groupSize: "Max 20 Persons",
          bestSeason: "May - Sep",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
        {
          id: "l4",
          title: "Stunning Leh Tour Package",
          description:
            "Explore the scenic beauty of Manali with adventure activities",
          image:
          StunningLehtourPakageImage,
          price: "On Request",
          originalPrice: "On Request",
          rating: 4.9,
          discountPercentage: 25,
          inclusions: [
            "Stay In Respective Room",
            "Welcome Drink (Non Alcoholic)",
            "Daily Breakfast and Dinner in hotel",
            "Tea Kettle in the Room",
            "Pick Up and Drop From Leh.",
            "Transfer & Sightseeing in Pvt. cab",
            "All applicable Taxes.",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 20% cancellation charge",
            "29–15 days before travel: 40% cancellation charge",
            "14–7 days before travel: 60% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival in Leh - Rest and Relax",
              meals: "Dinner",
              description:
                "Arrive at Leh Airport, where you will be met by our representative and escorted to your hotel. This entire day is designated for absolute rest to safely adapt to the high altitude. Overnight stay at Leh.",
            },
            {
              day: 2,
              title: "Leh Heritage & Sangam Confluence Tour",
              meals: "Breakfast",
              description:
                "Embark on a local discovery tour of Shey Palace, Thiksey Monastery, and the Hall of Fame museum. After lunch, visit the gravity-defying Magnetic Hill and stop to witness the majestic meeting of the Indus and Zanskar rivers. Overnight at Leh.",
            },
            {
              day: 3,
              title: "Leh to Nubra Valley via Khardung La Pass",
              meals: "Breakfast",
              description:
                "Cross the high mountain pass of Khardung La (18,380 ft) to enter Nubra Valley. Check-in to your valley camp. Spend the evening amidst the Hunder Sand Dunes enjoying a unique safari ride on double-humped camels. Overnight in Nubra Valley.",
            },
            {
              day: 4,
              title: "Nubra Valley to Pangong Lake via Shyok Route",
              meals: "Breakfast",
              description:
                "Take the scenic, rugged route along the Shyok River directly from Nubra Valley to Pangong Lake (14,270 ft). Watch the breathtaking waters of this endorheic lake change colors under the high-altitude sun. Check-in and overnight at a lakeside camp.",
            },
            {
              day: 5,
              title: "Pangong Lake Sunrise to Leh Transfer",
              meals: "Breakfast",
              description:
                "Witness a beautiful sunrise over the serene border waters of Pangong Tso. After breakfast, pack up and begin your return drive to Leh, crossing over the high Chang La Pass (17,370 ft). Check into your Leh hotel for an overnight stay.",
            },
            {
              day: 6,
              title: "Shanti Stupa Sightseeing & Local Leisure",
              meals: "Breakfast",
              description:
                "TVisit the beautiful white-domed Shanti Stupa in the morning for a bird's-eye view of Leh town. Spend your afternoon at leisure wandering the local bazaars to buy authentic souvenirs and mountain handicrafts. Overnight at Leh.",
            },
            {
              day: 7,
              title: "Departure from Leh Airport",
              meals: "Breakfast",
              description:
                "After a final breakfast in the mountains, check out of your hotel by 08:00 Hrs and transfer directly to the airport for your return flight home.",
            },
          ],
          packageInfo:
            "Our most comprehensive 7-day loop covering the complete golden triangle of Ladakh: Leh, Nubra Valley, and Pangong Lake, complete with overnight lakeside glamping.",
          cities: ["Leh", "Khardungla", "Nubra Valley ", "Pangong Lake", "Leh"],
          duration: "7 Days & 6 Nights",
          groupSize: "Max 15 Persons",
          bestSeason: "May - Sep",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
      ],
    },
  ];

// internationalLocations Data------------
  const internationalLocations = [
    {
      id: "thailand",
      name: "Thailand Tour Package",
      image: internation,
      description:
        "Experience tropical beaches, vibrant city life, and serene temples in Thailand.",
      packages: [
        {
          id: "th1",
          title: "Thailand Holiday Tour",
          locationId: "Thailand",
          description:
            "A perfect mix of beaches, nightlife, and cultural landmarks.",
          image: thailandImage,
          price: "On Request",
          rating: 4.8,
          inclusions: [
            "02 nights at Bangkok",
            "02 nights at Pattaya",
            "Breakfast & Dinner",
            "Coral Island Tour with lunch in Pattaya",
            "Bangkok city tour & Temple Tour",
            "All transfers on SIC basis",
            "Sightseeing on SIC basis",
            "Return airport transfers",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "25 or more days before travel: 20% cancellation charge",
            "Before 29 to 15 Days of your travel date if you cancel your trip then 60% of the amount charge applicable as per cancellation policy.",
            "9–5 days before travel: 70% cancellation charge",
            "Less than 7 days of your travel date if you cancel your trip then 100% amount charge applicable as per cancellation policy. (There is no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival in Bangkok & Transfer to Pattaya",
              meals: "Dinner",
              description:
                "Arrive at Bangkok International Airport where our representative will warmly welcome you. Begin your scenic drive to Pattaya, Thailand's famous beach destination. Upon arrival, check into your hotel and relax after your journey. In the evening, you may explore the lively streets, local markets, or nearby beaches at your leisure. Overnight stay in Pattaya.",
            },
            {
              day: 2,
              title: "Coral Island Tour by Speedboat",
              meals: "Breakfast, Lunch, Dinner",
              description:
                "After breakfast, head to the stunning Coral Island (Koh Larn) by speedboat. Spend the day relaxing on pristine white sandy beaches, swimming in crystal-clear waters, or enjoying optional water sports like parasailing, jet skiing, and banana boat rides. Enjoy a delicious lunch before returning to Pattaya. Evening free for leisure. Overnight stay in Pattaya.",
            },
            {
              day: 3,
              title: "Pattaya City Tour & Transfer to Bangkok",
              meals: "Breakfast",
              description:
                "After breakfast, check out from the hotel and enjoy a brief city tour of Pattaya, including attractions such as Gems Gallery and scenic viewpoints. Later, proceed to Bangkok. Upon arrival, check into your hotel and spend the evening exploring nearby shopping streets or enjoying local cuisine. Overnight stay in Bangkok.",
            },
            {
              day: 4,
              title: "Bangkok City & Temple Tour",
              meals: "Breakfast",
              description:
                "Start your day with breakfast before embarking on a guided city tour of Bangkok. Visit some of the city's most iconic landmarks, including Wat Pho (Temple of the Reclining Buddha), Wat Arun (Temple of Dawn), and drive past the Grand Palace. The evening is free for optional activities such as a Chao Phraya River Dinner Cruise or shopping. Overnight stay in Bangkok.",
            },
            {
              day: 5,
              title: "Safari World & Marine Park Excursion",
              meals: "Breakfast",
              description:
                "After breakfast, enjoy a fun-filled day at Safari World and Marine Park. Witness exciting wildlife, entertaining dolphin and sea lion shows, bird performances, and a thrilling safari drive through open habitats. Return to your hotel in the evening and relax. Overnight stay in Bangkok.",
            },
            {
              day: 6,
              title: "Shopping & Departure",
              meals: "Breakfast",
              description:
                "Enjoy your final breakfast in Thailand before checking out of the hotel. Depending on your flight schedule, spend some free time shopping at popular destinations like MBK Center, Siam Paragon, or local markets. Later, transfer to Bangkok International Airport for your return flight with wonderful memories of your Thailand vacation.",
            },
          ],
          cities: ["Pattaya", "Bangkok"],
          duration: "6 Days & 5 Nights",
          groupSize: "Max 18 Persons",
          bestSeason: "Nov - Mar",
          difficulty: "Easy",
          highlights: ["Bangkok", "Pattaya", "Coral Island", "Temple Visits"],
        },
      ],
    },
    {
      id: "dubai",
      name: "Dubai Tour Package",
      image: dubaiImage,
      description:
        "Enjoy luxury, desert adventures, and iconic city landmarks in Dubai.",
      packages: [
        {
          id: "du1",
          title: "Luxury Dubai Highlights",
          locationId: "Dubai",
          description:
            "A premium Dubai itinerary with skyline views and desert safari.",
          image: dubaiImage,
          price: "On Request",
          rating: 4.9,
          inclusions: [
            "Welcome at Dubai International Airport",
            "4 Nights accommodation in Dubai",
            "Half Day Dubai City Tour",
            "Desert Safari with BBQ Dinner",
            "Dhow Cruise with Dinner",
            "Breakfasts at the Hotel",
            "Return airport transfers",
            "Dubai Visa Charges & Airfare",
          ],
          cancellationPolicy: [
            "45 or more days before travel: 20% cancellation charge",
            "44–21 days before travel: 40% cancellation charge",
            "20–8 days before travel: 70% cancellation charge",
            "Less than 8 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Welcome to Dubai & Evening Leisure",
              meals: "Breakfast",
              description:
                "Touch down in the city of gold! Upon your arrival, enjoy a comfortable transfer to your hotel. After settling into your room, spend a relaxed evening wandering through the sprawling Dubai Mall to experience its world-class shopping and indoor attractions at your own pace.",
            },
            {
              day: 2,
              title: "Architectural Landmarks & Sky-High Views",
              meals: "Breakfast",
              description:
                "Begin the day with a guided sightseeing circuit highlighting the modern architectural feats of Dubai. Delve into the region's rich heritage at the Al Fahidi Fort (Dubai Museum) before taking a high-speed elevator up the iconic Burj Khalifa to admire panoramic vistas from the observation deck.",
            },
            {
              day: 3,
              title: "Thrilling Desert Safari Adventure",
              meals: "Breakfast, Dinner",
              description:
                "Spend your morning at leisure. In the afternoon, journey deep into the golden sand dunes for an exhilarating dune-bashing session. Try out traditional camel riding and unwind at a Bedouin-style camp, culminating in a sumptuous live barbecue feast beneath the night sky.",
            },
            {
              day: 4,
              title: "Coastal Highlights & Historic Souks",
              meals: "Breakfast",
              description:
                "Discover the vibrant waterfront district of Dubai Marina and snap photos by the shores of Jumeirah Beach. Later, cross the creek to browse the aromatic Spice Souk and the glittering alleys of the historic Gold Souk for unique keepsakes.",
            },
            {
              day: 5,
              title: "Final Day & Airport Departure",
              meals: "Breakfast",
              description:
                "Conclude your trip with a final hotel breakfast. After checking out, a private vehicle will escort you to the airport in time for your homeward bound flight, carrying precious holiday memories.",
            },
          ],
          cities: ["Dubai"],
          duration: "5 Days & 4 Nights",
          groupSize: "Max 16 Persons",
          bestSeason: "Nov - Apr",
          difficulty: "Easy",
          highlights: [
            "Burj Khalifa",
            "Desert Safari",
            "Dubai Mall",
            "Marina Cruise",
          ],
        },
      ],
    },
    {
      id: "singapore",
      name: "Singapore Tour Package",
      image: singapore,
      description:
        "Explore futuristic cityscapes, gardens, and family-friendly attractions.",
      packages: [
        {
          id: "sg1",
          title: "Singapore City & Gardens",
          locationId: "Singapore",
          description:
            "A vibrant city break packed with iconic sightseeing and attractions.",
          image: singapore,
          price: "On Request",
          rating: 4.7,
          inclusions: [
            "Hotel Stay",
            "Airport Transfers",
            "Daily Breakfast",
            "Gardens by the Bay Entry",
            "Bangkok city tour & Temple Tour",
            "Sentosa Island Ticket",
            "City Tour",
            "All Taxes",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "30 or more days before travel: 25% cancellation charge",
            "29–14 days before travel: 50% cancellation charge",
            "13–7 days before travel: 75% cancellation charge",
            "Less than 7 days of your travel date if you cancel your trip then 100% amount charge applicable as per cancellation policy. (There is no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Welcome to Singapore & Evening Leisure",
              meals: "Breakfast",
              description:
                "Touch down in the Garden City! Upon your arrival at Changi, enjoy a comfortable transfer to your hotel. After settling into your room, spend a relaxed evening wandering through the futuristic Jewel Changi or exploring the bustling shopping belt of Orchard Road at your own pace.",
            },
            {
              day: 2,
              title: "Architectural Landmarks & Sky-High Views",
              meals: "Breakfast",
              description:
                "Begin the day with a guided sightseeing circuit highlighting the modern architectural feats of Singapore, including the iconic Merlion Park and historic Civic District. Later, cross over to the spectacular Gardens by the Bay to admire the futuristic Supertree Grove and take in panoramic vistas from the Marina Bay Sands SkyPark.",
            },
            {
              day: 3,
              title: "Cultural Explorer & Sentosa Island Adventure",
              meals: "Breakfast, Dinner",
              description:
                "Spend your morning diving into the rich heritage of Chinatown or Little India. In the afternoon, journey across to Sentosa Island for an exhilarating cable car ride and beachside exploration. Unwind as evening approaches, culminating in a sumptuous dinner experience at a vibrant waterfront restaurant or trying local delights at a bustling hawker center.",
            },
            {
              day: 4,
              title: "Final Souvenirs & Airport Departure",
              meals: "Breakfast",
              description:
                "Conclude your holiday with a final hotel breakfast. Take advantage of some last-minute leisure time to buy souvenirs at Clarke Quay or Bugis Street. Afterward, check out and receive a smooth vehicle transfer to the airport in time for your homeward-bound flight.",
            },
          ],
          cities: ["Singapore"],
          duration: "4 Days & 3 Nights",
          groupSize: "Max 18 Persons",
          bestSeason: "Feb - Aug",
          difficulty: "Easy",
          highlights: [
            "Marina Bay",
            "Sentosa",
            "Night Safari",
            "Gardens by the Bay",
          ],
        },
      ],
    },
    {
      id: "nepal",
      name: "Nepal Tour Package",
      image: nepalImage,
      description:
        "Discover Himalayan beauty, spiritual culture, and peaceful lakes in Nepal.",
      packages: [
        {
          id: "np1",
          title: "Kathmandu & Pokhara Journey",
          locationId: "Nepal",
          description:
            "A scenic getaway through Kathmandu and Pokhara with mountains and temples.",
          image: nepalImage,
          price: "On Request",
          rating: 4.8,
          inclusions: [
            "03 nights at Kathmandu",
            "02 nights at Pokhara",
            "Daily Breakfast",
            "Kathmandu Sightseeing Tour",
            "Pokhara Sightseeing Tour",
            "Sarangkot Sunrise Excursion",
            "Phewa Lake Boating",
            "Kathmandu – Pokhara – Kathmandu by Road",
            "Airport Transfers",
            "All Transfers & Sightseeing by Private Vehicle",
          ],
          cancellationPolicy: [
            "Before 60 days of your travel date if you cancel your trip then 20% of the amount charge applicable as per cancellation policy.",
            "25 or more days before travel: 20% cancellation charge",
            "Before 29 to 15 Days of your travel date if you cancel your trip then 60% of the amount charge applicable as per cancellation policy.",
            "9–5 days before travel: 70% cancellation charge",
            "Less than 7 days of your travel date if you cancel your trip then 100% amount charge applicable as per cancellation policy. (There is no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival in Kathmandu",
              meals: "None",
              description:
                "Welcome to Kathmandu, the capital of Nepal! Upon arrival at Tribhuvan International Airport, meet our local representative and enjoy a comfortable transfer to your hotel. Check in and spend the remainder of the day at leisure. You can explore the vibrant streets of Thamel, visit nearby cafés, or relax after your journey. Overnight stay in Kathmandu.",
            },
            {
              day: 2,
              title: "Kathmandu Sightseeing Tour",
              meals: "Breakfast",
              description:
                "After breakfast, embark on a full-day sightseeing tour of Kathmandu. Visit the sacred Pashupatinath Temple, the magnificent Boudhanath Stupa, and the famous Swayambhunath (Monkey Temple), offering panoramic views of the city. Later, explore the historic Kathmandu Durbar Square before returning to the hotel for an overnight stay.",
            },
            {
              day: 3,
              title: "Drive from Kathmandu to Pokhara",
              meals: "Breakfast",
              description:
                "Enjoy breakfast before setting out on a scenic drive from Kathmandu to Pokhara through beautiful hills, rivers, and charming villages. Upon arrival, check in to your hotel and spend the evening strolling around the peaceful Lakeside area beside Phewa Lake. Overnight stay in Pokhara.",
            },
            {
              day: 4,
              title: "Pokhara Sightseeing Tour",
              meals: "Breakfast",
              description:
                "Start your day with an early morning visit to Sarangkot to witness a breathtaking sunrise over the Annapurna and Dhaulagiri mountain ranges (weather permitting). Later, visit Davis Falls, Gupteshwor Mahadev Cave, Bindhyabasini Temple, Seti Gorge, and enjoy a relaxing boat ride on Phewa Lake with a visit to Tal Barahi Temple. Overnight stay in Pokhara.",
            },
            {
              day: 5,
              title: "Drive Back to Kathmandu",
              meals: "Breakfast",
              description:
                "After breakfast, check out from the hotel and drive back to Kathmandu while enjoying Nepal’s picturesque countryside. Upon arrival, check in to your hotel. The evening is free for shopping at local markets or exploring the city's cultural attractions at your own pace.Overnight stay in Kathmandu.",
            },
            {
              day: 6,
              title: "Departure from Kathmandu",
              meals: "Breakfast",
              description:
                "After breakfast, check out from the hotel. Depending on your flight schedule, you may have some free time for last-minute shopping or sightseeing. Later, you will be transferred to Tribhuvan International Airport for your onward journey, carrying wonderful memories of your Kathmandu and Pokhara holiday.",
            },
          ],
          cities: ["Kathmandu", "Pokhara-Drive"],
          duration: "6 Days & 5 Nights",
          groupSize: "Max 16 Persons",
          bestSeason: "sep - Nov",
          difficulty: "Moderate",
          highlights: ["Kathmandu", "Pokhara", "Sarangkot", "Phewa Lake"],
        },
      ],
    },
    {
      id: "hong-kong",
      name: "Hong Kong Tour Package",
      image: hongkongImage,
      description:
        "Enjoy skyline views, food, shopping, and vibrant city energy in Hong Kong.",
      packages: [
        {
          id: "hk1",
          title: "Hong Kong Tour",
          locationId: "Hong-Kong",
          description:
            "An exciting city trip with iconic views and local experiences.",
          image: hongkongImage,
          price: "On Request",
          rating: 4.6,
          inclusions: [
            "04 Nights Stay in Selected Hong Kong Hotel",
            "Daily Breakfast at the Hotel",
            "Breakfast & Dinner",
            "Half-Day Guided Hong Kong City Tour",
            "One-Way Victoria Peak Tram Ride",
            "Madame Tussauds Admission Ticket",
            "Round-Trip Airport Transfers on SIC Basis",
            "All Driver and Transport Sightseeing Taxes",
          ],
          cancellationPolicy: [
            "30 or more days before travel: 20% cancellation charge",
            "29–14 days before travel: 50% cancellation charge",
            "13–7 days before travel: 75% cancellation charge",
            "Less than 7 days before travel: 100% charge (no refund)",
          ],
          itinerary: [
            {
              day: 1,
              title: "Arrival in Hong Kong & Evening at Leisure",
              meals: "Breakfast",
              description:
                "Welcome to Hong Kong! Upon landing at the international airport, clear customs and proceed to the exit gate where our local representative will greet you. Enjoy a comfortable transfer to your hotel. After checking in, spend the rest of your day relaxing or exploring the lively neon-lit streets at your own pace. Overnight stay at the hotel.",
            },
            {
              day: 2,
              title: "Panoramic Hong Kong City Tour & Victoria Peak",
              meals: "Breakfast",
              description:
                "Savor a delicious breakfast before embarking on a half-day city sightseeing tour. Explore Aberdeen Fishing Village to catch a glimpse of the traditional floating lifestyle, followed by a scenic stop at Repulse Bay beach. Experience an iconic one-way ride on the historic Peak Tram up to Victoria Peak, where you will visit the famous Madame Tussauds Wax Museum. Conclude the tour along the Avenue of Stars before stopping for souvenir shopping in the vibrant Tsim Sha Tsui district. Overnight stay at the hotel.",
            },
            {
              day: 3,
              title: "Optional Full-Day Hong Kong Disneyland Excursion",
              meals: "Breakfast",
              description:
                "Enjoy breakfast at the hotel followed by a free day. You can opt for a magical full-day excursion to Hong Kong Disneyland. Immerse yourself in childhood nostalgia across themed lands including Main Street U.S.A., Fantasyland, Adventureland, and Tomorrowland. Enjoy interactive rides, live musical parades, and meet your favorite Disney characters brought to life. Return to the hotel for a relaxing evening. Overnight stay at the hotel.",
            },
            {
              day: 4,
              title: "Optional Ocean Park Adventure or Leisure Day",
              meals: "Breakfast",
              description:
                "After breakfast, spend your day exploring the city or opt for an exciting day-trip to Ocean Park Hong Kong. This massive world-class marine park features a spectacular oceanarium housing sharks, sea lions, and dolphins, alongside a dedicated panda habitat. Thrill-seekers can brave the hair-raising roller coasters and amusement rides perched across two mountain peaks linked by a scenic cable car. Return to the hotel for your final night. Overnight stay at the hotel.",
            },
            {
              day: 5,
              title: "Final Souvenirs & Airport Departure",
              meals: "Breakfast",
              description:
                "Conclude your vacation with breakfast at the hotel. Check out by standard timing and take advantage of free time for last-minute shopping or cafe-hopping. Afterward, meet your driver for a smooth transfer back to the airport for your onward flight home.",
            },
          ],
          cities: ["Hong Kong"],
          duration: "5 Days & 4 Nights",
          groupSize: "Max 18 Persons",
          bestSeason: "Oct - Dec",
          difficulty: "Easy",
          highlights: [
            "Victoria Peak",
            "Disneyland",
            "Night Market",
            "Harbour Cruise",
          ],
        },
      ],
    },
  ];

  const featuredTours = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/00/df/58/00df5851d01aec219d454b25cb396cf2.jpg",
      title: "Manali",
      description: "Manali Volvo Tour Package From Delhi",
      price: 5500,
      rating: 4.9,
      location: " Himachal",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/1b/b9/71/1bb9717b9c33e231a1c7b7c412e42d5c.jpg",
      title: "Beach Bliss",
      description: "Golden beaches and vibrant nightlife in Goa",
      price: 7999,
      rating: 4.8,
      location: "Goa",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/52/03/6c/52036c844cd80174d9b89d88f789fcb9.jpg",
      title: "Lake Palace",
      description: "explore elegant palaces in Udaipur",
      price: 9499,
      rating: 4.8,
      location: "Udaipur",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/736x/bb/97/b7/bb97b7bbe74f26602ca641f53e4da083.jpg",
      title: "Backwater Paradise",
      description: "backwaters of Kerala",
      price: 8499,
      rating: 4.7,
      location: "Kerala",
    },
  ];

  const value = {
    heroSlides,
    featuredTours,
    domesticLocations,
    internationalLocations,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
