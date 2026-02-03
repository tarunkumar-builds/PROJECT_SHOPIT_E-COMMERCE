export function SectionTitle({ title, subtitle }) {
    return (
        <div className="text-center max-w-2xl mx-auto my-14">
            <h3 className="text-2xl font-semibold tracking-wide mb-3">
                {title} <span className="ml-2">—</span>
            </h3>
            <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
    );
}