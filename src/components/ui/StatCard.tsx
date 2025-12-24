interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  icon?: React.ReactNode;
}

export function StatCard({ label, value, trend, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <h3 className="text-2xl font-bold mt-1 text-secondary">{value}</h3>
          {trend && (
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">
              {trend}
            </span>
          )}
        </div>
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}