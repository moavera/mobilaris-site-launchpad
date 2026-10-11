import { Clock, Check, MessageSquare, Users, Home, Box, X, Send, Plus } from "lucide-react";

export const messageRows = [
  ["Scheduled Maintenance Tonight", "Zone 3, Zone 4", "Info", "—"],
  ["Fire Alarm Activated", "All zones", "Alarm", "13:51 → Until stopped"],
  ["Road Closure", "Södra rampen", "Warning", "12:00 → 12:50"],
  ["Blast Notification", "All zones", "Alarm", "11:59 → Until stopped"],
  ["Restricted Access to Shaft 3", "Södra rampen", "Info", "14:00 → 15:00"],
  ["Gas Detection Alert", "Zone A, Zone 4", "Alarm", "15:24 → Until stopped"],
];

export const SeverityOptions = () => <div className="message-severity-options">
  {[["Info", "Good to know"], ["Warning", "Take care"], ["Alarm", "Act now"]].map(([name, detail]) => <div key={name} className={`message-severity-option message-severity-${name.toLowerCase()}`}><span><i />{name}</span><small>{detail}</small></div>)}
</div>;

export const MessageShowcase = () => <div className="message-showcase" role="img" aria-label="Mobilaris Site message composer showing severity, message, recipients and active period">
  <div className="message-app-backdrop" aria-hidden="true">
    <aside>{[Box, Home, Box, MessageSquare, Users].map((Icon, index) => <Icon key={index} />)}</aside>
    <div className="message-app-main"><div className="message-app-heading"><span>Messages <small>10</small></span><span><Plus /> New message</span></div><div className="message-app-search">Search messages　　All severities　　All zones</div><div className="message-app-table"><div>Subject <span>Zone</span><span>Severity</span><span>Duration</span></div>{[...messageRows, ...messageRows.slice(0,4)].map((row,index) => <div key={index}>{row.map((cell,i) => <span key={i}>{cell}</span>)}</div>)}</div></div>
  </div>
  <div className="message-composer" aria-hidden="true">
    <div className="message-composer-heading"><strong>New message</strong><small>Everyone inside the selected zones will be notified.</small><X /></div>
    <div className="message-composer-body"><label>Severity</label><SeverityOptions /><label>Subject</label><div className="message-display-field">What is this about?</div><label>Message</label><div className="message-display-field message-display-textarea">Write the message people will receive…<small>0 / 160</small></div><div className="message-composer-settings"><div><label>Recipients <span>Change</span></label><div className="message-display-field"><span>Floor 1</span><span>Zone 4</span><span>Zone 24</span></div></div><div><label>Active period</label><div className="message-display-field"><Clock /><div>Today, 15:24 – 16:24<small>Sends now, active for 1 hour</small></div></div></div></div>
    <div className="message-composer-footer"><span>Cancel</span><span><Send /> Send message</span></div>
  </div>
</div>;

export const ZoneVisual = () => <div className="message-step-visual" aria-hidden="true"><div className="message-mini-label">Recipients <span>Change</span></div><div className="message-zone-tags">{["Level 380", "Section A", "Section B"].map(zone => <span key={zone}>{zone}</span>)}</div><div className="message-mini-label">Zones on site</div><div className="message-zone-list">{[["Level 320", "12 people"],["Level 380", "24 people"],["Workshop", "6 people"]].map(([zone,count],i) => <div key={zone}><span className={i===1 ? "message-checkbox checked" : "message-checkbox"}>{i===1 && <Check />}</span>{zone}<small>{count}</small></div>)}</div></div>;

export const DurationVisual = () => <div className="message-step-visual message-duration-visual" aria-hidden="true"><div className="message-mini-label">Severity</div><SeverityOptions /><div className="message-mini-label">Active period</div><div className="message-period"><Clock /><div>Today, 14:02 – 16:02<small>Sends now, active for 2 hours</small></div><span>›</span></div></div>;

export const AcknowledgementVisual = () => <div className="message-step-visual" aria-hidden="true"><div className="message-ack-title">Evacuate Section B <span>18 / 24</span></div><div className="message-status"><span className="message-status-alarm">● Alarm</span><span className="message-status-active">● Active</span></div><div className="message-progress"><span /></div>{[["Crew 3", "Level 380 · Section A"],["Crew 7", "Level 380 · Section B"],["Crew 2", "Section B"]].map(([crew,zone],i) => <div className="message-crew" key={crew}><div>{crew}<small>{zone}</small></div><span className={i<2 ? "message-confirmed" : ""}>{i<2 ? "✓ Acknowledged" : "Pending"}</span></div>)}</div>;