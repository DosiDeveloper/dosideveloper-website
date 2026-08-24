import { supabase } from "@/utils/supabase";

async function getBlogStats() {
  const { data: totalLog, error: totalLogError } = await supabase
    .from("post_metadata")
    .select("id", { count: "exact" });
  const { data: lastSync, error: lastSyncError } = await supabase
    .from("post_metadata")
    .select("created_at")
    .order("created_at", { ascending: false })
    .limit(1);

  const totalLogCount = totalLog?.length ?? 0;
  const lastSyncDate = new Date(lastSync?.[0]?.created_at ?? 0);
  const lastSyncDateFormatted = `${lastSyncDate.getFullYear()}.${lastSyncDate.getMonth()}.${lastSyncDate.getDate()}_${lastSyncDate.getHours()}:${lastSyncDate.getMinutes()}:${lastSyncDate.getSeconds()}`;
  return { totalLogCount, lastSyncDateFormatted, totalLogError, lastSyncError };
}
export default async function BlogStats() {
  const { totalLogCount, lastSyncDateFormatted, totalLogError, lastSyncError } =
    await getBlogStats();
  return (
    <>
      <div className="flex gap-3 p-3">
        <h4 className="uppercase text-[#00DAF3]">[Total_log]</h4>
        {totalLogError && <p>{totalLogError.message}</p>}
        <p>{totalLogCount}</p>
      </div>
      <div className="flex gap-3 p-3">
        <h4 className="uppercase text-[#00DAF3]">[Last_sync]</h4>
        {lastSyncError && <p>{lastSyncError.message}</p>}
        <p>{lastSyncDateFormatted}</p>
      </div>
    </>
  );
}
