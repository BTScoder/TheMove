const Community = () => {
  return (
    <>
      <section>
        <div>
          <h2 className="font-heading text-3xl uppercase">
            Community Identity
          </h2>
          <p className="mt-5 text-sm text-gray-500">
            These details are managed by community leaders and are read-only.
          </p>
        </div>

        <main className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-6 bg-gray-100">
            <p className="font-heading">Membership Status:</p>
            <p>Member</p>
          </div>
          <div className="flex flex-col items-center gap-6 bg-gray-100">
            <p className="font-heading">Member Since</p>
            <p>March 15, 2024</p>
          </div>
          <div className="flex flex-col items-center gap-6 bg-gray-100">
            <p className="font-heading">Assigned Group</p>
            <p>Growth Group A</p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Community;
