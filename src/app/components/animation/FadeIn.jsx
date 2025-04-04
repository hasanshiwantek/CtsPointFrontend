'use client';

export default function FadeIn({ children, animation = 'fade-up', delay = 0 }) {
  return (
    <div data-aos={animation} data-aos-delay={delay}>
      {children}
    </div>
  );
}
