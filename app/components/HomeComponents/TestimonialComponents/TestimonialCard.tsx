import Image from "next/image";

function TestimonialCard() {
  return (
    <div>
      <div>
        <Image
          src="/images/test1.jpg"
          alt="testimonial"
          width={200}
          height={150}
        />
      </div>
      <div>
        <p>text of the testimonial</p>
        <h3>Name of the person</h3>
      </div>
    </div>
  );
}

export default TestimonialCard;
