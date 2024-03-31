export default function WayToTeach({ title, description }) {
    return (
        <div className="way-to-teach">
            <li>
                <p>
                    <strong>{title} </strong>
                    {description}
                </p>
            </li>
        </div>
    )
}