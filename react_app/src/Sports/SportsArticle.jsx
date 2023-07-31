import React from 'react';
import photo from '../images/oly.jpg'
import photo1 from '../images/1.jpg'
const SportsArticle = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 py-4 text-center text-white">
        <h1 className="text-4xl font-bold">Olympics</h1>
      </header>
      <div className="container mx-auto px-4 py-8">
        <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="image-section md:col-span-2 p-4 rounded-lg bg-pink-100 shadow-md">
            <div className="image-content flex flex-col md:flex-row md:space-x-4">
              <img src={photo} alt="Image Description" className="w-full md:w-64 rounded mb-4 md:mb-0" />
              <img src={photo1} alt="Image Description" className="w-full md:w-64 rounded" />
              {/* <img src={photo1} alt="Image Description" className="w-full md:w-64 rounded" /> */}
            </div>
          </div>
          <div className="major-points md:col-span-1 p-4 rounded-lg bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-2">Major Points</h3>
            <ul className="list-disc pl-4">
              <li className="mb-1">Sports - 52</li>
              <li className="mb-1">Nations - 206</li>
              <li className="mb-1">Hosts - 26</li>
              <li className="mb-1">Editions -27</li>
              <li className="mb-1">Players - 116578</li>
            </ul>
          </div>
          <section id="section1" className="md:col-span-2">
            <h2 className="text-2xl font-semibold mt-8">Olympics History</h2>
            <p className="mt-4 text-gray-700">
            *The Olympic Games: Celebrating Global Unity and Sporting Excellence*

The Olympic Games, also known simply as the Olympics, are the world's most prestigious and celebrated international multi-sport event. Held every four years, the Olympics bring together athletes from different countries and cultures to compete in various sporting disciplines, promoting the values of excellence, friendship, and respect.

*Origins and History:*
The roots of the Olympics can be traced back to ancient Greece, where the Games were first held in Olympia around 776 BCE. These ancient games were held to honor the Greek god Zeus and featured various athletic competitions, including running, wrestling, discus throwing, and chariot racing. The ancient Olympics continued for nearly 12 centuries until they were eventually banned by the Roman Emperor Theodosius I in 393 CE.

The modern Olympic Games were revived in the late 19th century by French educator and historian Pierre de Coubertin. Inspired by the spirit of the ancient Games, Coubertin sought to create a global sporting event that would foster international understanding and peaceful competition. The inaugural modern Olympics took place in Athens, Greece, in 1896, and have been held every four years ever since, with the exception of interruptions during World War I and World War II.

*The Olympic Movement:*
The Olympics are not just a sporting event; they represent a global movement promoting peace, unity, and the values of fair play and respect. The Olympic Movement is governed by the International Olympic Committee (IOC), which oversees the planning and organization of the Games. The IOC's mission is to "contribute to building a peaceful and better world by educating youth through sport practiced without discrimination of any kind and in the Olympic spirit, which requires mutual understanding with a spirit of friendship, solidarity, and fair play."

*The Olympic Symbols:*
The Olympics have several iconic symbols that represent its spirit and values. The Olympic Rings, designed by Coubertin in 1913, consist of five interlocking rings in different colors (blue, yellow, black, green, and red) on a white background. The rings symbolize the five continents (Europe, Asia, Africa, Americas, and Oceania) and the unity of athletes from all over the world.

The Olympic Flame is another significant symbol. The flame is lit in Olympia, Greece, and carried by relay to the host city, where it burns throughout the duration of the Games. The lighting of the Olympic Flame symbolizes the passing of the Olympic ideals from ancient to modern times.

*The Olympic Games Today:*
The modern Olympics have grown significantly since their inception, featuring an ever-increasing number of sports and events. In addition to traditional sports like athletics, swimming, and gymnastics, the Games have expanded to include more niche sports and disciplines to accommodate the diverse interests of athletes and spectators.

Today, the Summer and Winter Olympics are held alternately every two years, with the Summer Olympics attracting a larger number of athletes and participating countries. The Games are hosted in different cities around the world, providing an opportunity for the host nation to showcase its culture, history, and hospitality to a global audience.

*The Olympic Spirit:*
Beyond the medals and records, the Olympics embody the spirit of humanity's pursuit of excellence and the power of sports to transcend boundaries. The Games bring together people of different backgrounds, cultures, and languages, fostering a sense of camaraderie and unity among nations. Athletes compete not only for personal glory but also to represent their countries and inspire the world with their passion and dedication.

The Olympics have become a symbol of hope, perseverance, and resilience, especially during challenging times. They serve as a reminder that through cooperation and understanding, we can overcome obstacles and achieve greatness together.

In conclusion, the Olympic Games stand as a testament to the power of sports to unite people and nations, celebrating the values of friendship, respect, and fair play. As the world comes together to witness the spectacle of athletic excellence, the Olympics continue to inspire and uplift humanity, leaving a lasting legacy of unity and peace for generations to come.
            </p>
          </section>
          <div className="major-points md:col-span-1 p-9 rounded-lg bg-white shadow-md md:hidden">
            <aside className="sidebar">
              <ul className="list-disc pl-4">
                <li><a href="#section1" className="mb-1" style={{ color: 'blue', textDecoration: 'underline' }}>MSD THE MAN THE MYTH THE LEGEND</a></li>
                <li><a href="#section2" className="mb-1" style={{ color: 'blue', textDecoration: 'underline' }}>Early Life</a></li>
                <li><a href="#section3" className="mb-1" style={{ color: 'blue', textDecoration: 'underline' }}>International Career</a></li>
              </ul>
            </aside>
          </div>
        </main>
      </div>
     
    </div>
  );
};

export default SportsArticle;