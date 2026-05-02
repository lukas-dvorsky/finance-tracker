import { createClient } from "@/lib/supabase/server";

async function InstrumentsData() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("Test").select();

  if (error) {
    console.error("ERESRS");
  }
  if (!data || data.length === 0) {
    return <p>No data</p>;
  }

  return (
    <div className="flex gap-16">
      {data?.map((d) => (
        <div key={d.id} className="flex flex-col">
          <h1>{d.name}</h1>
          <p>{d.isValid ? "valid" : "invalid"}</p>
        </div>
      ))}
    </div>
  );
}

export default InstrumentsData;
