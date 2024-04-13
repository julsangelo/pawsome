import React from "react";

function About() {
  return (
    <div id="about" className="h-fit w-full relative">
      <div className="grid justify-center py-20 md:py-28 px-14 lg:px-60 gap-2 lg:gap-5">
        <h1
          className="text-darkbrown font-nunito font-bold text-center"
          style={{
            fontSize: "clamp(1.25rem, 1.1107rem + 0.6369vw, 1.875rem)",
          }}
        >
          About
        </h1>
        <h1
          className="text-black font-nunito font-bold text-center"
          style={{ fontSize: "clamp(1.25rem, 1.1943rem + 0.2548vw, 1.5rem)" }}
        >
          About me, the developer.
        </h1>
        <h1
          className="text-black font-nunito font-semibold indent-10 lg:indent-20 px-2 xl:px-28 text-justify leading-relaxed"
          style={{ fontSize: "clamp(1rem, 0.9443rem + 0.2548vw, 1.25rem)" }}
        >
          Hi, I'm Julius! As someone who owns pets, I feel bad for stray dogs
          and cats, especially for those caught by animal pounds and will be put
          to sleep. I've seen countless posts on Facebook about pets scheduled
          to be euthanized which is the initial drive for me to develop this, so
          that people could post it in a platform intended for only that
          purpose. I'm also planning to make a partnership with different rescue
          animal shelters and maybe in the near future, include ads for this
          website to generate revenue which will be donated to provide the needs
          of these helpless animals. Together, we could make a world much better
          for these animals as well!
        </h1>
      </div>
    </div>
  );
}

export default About;
