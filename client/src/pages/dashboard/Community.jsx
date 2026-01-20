const Community = () => {
  return (
    <>
      <section>
        <div>
          <h2 className="text-4xl font-bold uppercase">Community Identity</h2>
          <p className="mt-5 text-sm text-gray-500">
            These details are managed by community leaders and are read-only.
          </p>
        </div>

        <main className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center border-l-3 bg-gray-100 p-5 shadow-lg">
            <p className="text-xl font-semibold uppercase">Membership Status</p>
            <p className="mt-5">Member</p>
          </div>
          <div className="flex flex-col items-center border-l-3 bg-gray-100 p-5 shadow-lg">
            <p className="text-xl font-semibold uppercase">Member Since</p>
            <p className="mt-5">March 15, 2024</p>
          </div>
          <div></div>
        </main>
      </section>
    </>
  );
};

export default Community;
