/** @format */

export default function Carousel() {
  return (
    <div className="mt-8 pt-[7.5rem] flex justify-center">
      <div className="max-w-screen-xl w-[97vw] px-[15px] ">
        {/* desktop */}
        <picture>
          <img
            src="https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6ImNvbGxlY3Rpb25zLzMxNS9jMTBmMmRkMTI3YjE2NTcyYmVkMDM1YjlkN2Q1ZDgyMC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAwfSwid2VicCI6eyJxdWFsaXR5IjoxMDB9fX0="
            alt=""
            width={"100%"}
            height={"100%"}
            className="hidden md:inline"
          />
        </picture>

        {/* mobile */}
        <picture>
          <img
            src="https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6ImNvbGxlY3Rpb25zLzMxNS8zYzU4NTQ3YjZiYzY2Njc2NTM1MTliYTcxZmQxY2JmNS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDI0fSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ=="
            alt=""
            width={"100%"}
            height={"100%"}
            className="inline md:hidden"
          />
        </picture>
      </div>
    </div>
  );
}
