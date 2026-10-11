import { Clock, Check } from "lucide-react";

export const SeverityOptions = () => <div className="message-severity-options">
  {[["Info", "Good to know"], ["Warning", "Take care"], ["Alarm", "Act now"]].map(([name, detail]) => <div key={name} className={`message-severity-option message-severity-${name.toLowerCase()}`}><span><i />{name}</span><small>{detail}</small></div>)}
</div>;

export const ZoneVisual = () => <div className="message-step-visual" aria-hidden="true"><div className="message-mini-label">Recipients <span>Change</span></div><div className="message-zone-tags">{["Level 380", "Section A", "Section B"].map(zone => <span key={zone}>{zone}</span>)}</div><div className="message-mini-label">Zones on site</div><div className="message-zone-list">{[["Level 320", "12 people"],["Level 380", "24 people"],["Workshop", "6 people"]].map(([zone,count],i) => <div key={zone}><span className={i===1 ? "message-checkbox checked" : "message-checkbox"}>{i===1 && <Check />}</span>{zone}<small>{count}</small></div>)}</div></div>;

export const DurationVisual = () => <div className="message-step-visual message-duration-visual" aria-hidden="true"><div className="message-mini-label">Severity</div><SeverityOptions /><div className="message-mini-label">Active period</div><div className="message-period"><Clock /><div>Today, 14:02 – 16:02<small>Sends now, active for 2 hours</small></div><span>›</span></div></div>;

export const AcknowledgementVisual = () => <div className="message-step-visual" aria-hidden="true"><div className="message-ack-title">Evacuate Section B <span>18 / 24</span></div><div className="message-status"><span className="message-status-alarm">● Alarm</span><span className="message-status-active">● Active</span></div><div className="message-progress"><span /></div>{[["Crew 3", "Level 380 · Section A"],["Crew 7", "Level 380 · Section B"],["Crew 2", "Section B"]].map(([crew,zone],i) => <div className="message-crew" key={crew}><div>{crew}<small>{zone}</small></div><span className={i<2 ? "message-confirmed" : ""}>{i<2 ? "✓ Acknowledged" : "Pending"}</span></div>)}</div>;
