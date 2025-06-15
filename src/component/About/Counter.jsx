import React, { useEffect, useState, useRef } from 'react';
import { CounterContainer } from './About_style';

function Counter() {
  const [formattedCounts, setFormattedCounts] = useState(() => Array(4).fill('0'));
  const counterData = [
    { value: 1500, text: 'RETAIL OUTLETS' },
    { value: 5000, text: 'Products' },
    { value: 1300000, text: 'Customers' },
    { value: 2500, text: 'Pharmacists' },
  ];
  const counterContainerRef = useRef(null);
  const animationDuration = 2000;
  const hasAnimated = useRef(false);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + ' MILLION';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          counterData.forEach((item, index) => {
            const targetCount = item.value;
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / animationDuration, 1);
              const currentCount = Math.floor(progress * targetCount);
              setFormattedCounts((prevCounts) => {
                const updatedCounts = [...prevCounts];
                updatedCounts[index] = formatNumber(currentCount);
                return updatedCounts;
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          });

          observer.unobserve(counterContainerRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (counterContainerRef.current) {
      observer.observe(counterContainerRef.current);
    }

    return () => {
      if (counterContainerRef.current) {
        observer.unobserve(counterContainerRef.current);
      }
    };
  }, [counterData]);

  return (
    <CounterContainer ref={counterContainerRef}>
      <div className="container">
        <div className="row">
          {counterData.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="counter-info">
                <h1>{formattedCounts[index]}</h1>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CounterContainer>
  );
}

export default Counter;