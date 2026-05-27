import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const brand = {
  navy: "#071b2c",
  deep: "#0b2f3d",
  teal: "#08a89d",
  cyan: "#7de7dc",
  mint: "#dffcf7",
  paper: "#f7fbfa",
  white: "#ffffff",
  red: "#f25f5c",
  amber: "#f7b733",
};

const cubic = Easing.bezier(0.16, 1, 0.3, 1);

const fit = (value: number, input: [number, number], output: [number, number]) =>
  interpolate(value, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: cubic,
  });

const SceneShell: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
}> = ({ children, dark = true }) => {
  return (
    <AbsoluteFill
      style={{
        background: dark
          ? `linear-gradient(135deg, ${brand.navy} 0%, ${brand.deep} 56%, #102b35 100%)`
          : `linear-gradient(135deg, ${brand.paper} 0%, #edf9f6 100%)`,
        color: dark ? brand.white : brand.navy,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflow: "hidden",
      }}
    >
      <BrandTexture />
      {children}
    </AbsoluteFill>
  );
};

const BrandTexture: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = fit(frame % 240, [0, 240], [0, 80]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform: `translate(${drift * 0.2}px, ${drift * 0.12}px)`,
          opacity: 0.42,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -180,
          top: -260,
          width: 720,
          height: 720,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${brand.teal}44 0%, transparent 65%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -210,
          bottom: -300,
          width: 760,
          height: 760,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${brand.cyan}28 0%, transparent 66%)`,
        }}
      />
    </>
  );
};

const LogoLockup: React.FC<{ compact?: boolean; invert?: boolean }> = ({
  compact = false,
  invert = false,
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: compact ? 14 : 18,
      color: invert ? brand.navy : brand.white,
    }}
  >
    <Img
      src={staticFile("safetysight-logo.png")}
      style={{
        width: compact ? 54 : 72,
        height: compact ? 54 : 72,
        objectFit: "contain",
        filter: invert ? "none" : "drop-shadow(0 10px 22px rgba(0,0,0,0.25))",
      }}
    />
    <div style={{ lineHeight: 1 }}>
      <div
        style={{
          fontSize: compact ? 28 : 38,
          fontWeight: 850,
          letterSpacing: 0,
        }}
      >
        SafetySight
      </div>
      {!compact && (
        <div
          style={{
            marginTop: 8,
            color: invert ? "#3f5965" : brand.cyan,
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          First-aid kit compliance software
        </div>
      )}
    </div>
  </div>
);

const Kicker: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = brand.cyan,
}) => (
  <div
    style={{
      color,
      fontSize: 24,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: 2.6,
    }}
  >
    {children}
  </div>
);

const BigText: React.FC<{
  children: React.ReactNode;
  size?: number;
  color?: string;
  maxWidth?: number;
}> = ({ children, size = 82, color = brand.white, maxWidth = 900 }) => (
  <div
    style={{
      color,
      fontSize: size,
      fontWeight: 900,
      lineHeight: 0.95,
      letterSpacing: 0,
      maxWidth,
    }}
  >
    {children}
  </div>
);

const Body: React.FC<{
  children: React.ReactNode;
  color?: string;
  maxWidth?: number;
}> = ({ children, color = "#d6f5ef", maxWidth = 720 }) => (
  <div
    style={{
      color,
      fontSize: 32,
      lineHeight: 1.23,
      fontWeight: 650,
      maxWidth,
    }}
  >
    {children}
  </div>
);

const appear = (frame: number, start: number, end: number) => ({
  opacity: fit(frame, [start, end], [0, 1]),
  transform: `translateY(${fit(frame, [start, end], [44, 0])}px)`,
});

const StatusPill: React.FC<{
  label: string;
  tone: "danger" | "warning" | "good";
  delay: number;
}> = ({ label, tone, delay }) => {
  const frame = useCurrentFrame();
  const palette =
    tone === "danger"
      ? [brand.red, "#ffe6e5"]
      : tone === "warning"
        ? [brand.amber, "#fff5de"]
        : [brand.teal, "#defaf6"];

  return (
    <div
      style={{
        ...appear(frame, delay, delay + 18),
        display: "flex",
        alignItems: "center",
        gap: 13,
        padding: "18px 22px",
        borderRadius: 8,
        background: palette[1],
        color: brand.navy,
        boxShadow: "0 20px 50px rgba(5, 34, 43, 0.18)",
        width: 430,
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: palette[0],
          boxShadow: `0 0 0 7px ${palette[0]}25`,
        }}
      />
      <div style={{ fontSize: 25, fontWeight: 850 }}>{label}</div>
    </div>
  );
};

const PhoneScan: React.FC = () => {
  const frame = useCurrentFrame();
  const scan = fit((frame - 26) % 120, [0, 95], [88, 520]);

  return (
    <div
      style={{
        position: "absolute",
        right: 112,
        top: 88,
        width: 360,
        height: 560,
        borderRadius: 36,
        background: "#081a24",
        border: "12px solid #143545",
        boxShadow: "0 34px 90px rgba(0,0,0,0.34)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 22,
          borderRadius: 24,
          background: `linear-gradient(180deg, ${brand.paper}, #d9f6f1)`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 28,
            right: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ color: brand.navy, fontSize: 22, fontWeight: 900 }}>
            Kit A-12
          </div>
          <div
            style={{
              color: brand.teal,
              fontSize: 16,
              fontWeight: 900,
              padding: "8px 11px",
              background: "#d7faf5",
              borderRadius: 7,
            }}
          >
            READY
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 54,
            top: 112,
            width: 216,
            height: 216,
            borderRadius: 14,
            background:
              "repeating-linear-gradient(45deg, #102c38 0 13px, #ffffff 13px 24px)",
            border: `10px solid ${brand.white}`,
            boxShadow: "0 14px 34px rgba(7, 27, 44, 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 39,
            right: 39,
            top: scan,
            height: 5,
            borderRadius: 99,
            background: brand.teal,
            boxShadow: `0 0 18px ${brand.teal}`,
          }}
        />
        {["Bandages", "Burn gel", "Gloves"].map((item, index) => (
          <div
            key={item}
            style={{
              position: "absolute",
              left: 32,
              right: 32,
              bottom: 128 - index * 54,
              display: "flex",
              justifyContent: "space-between",
              padding: "14px 0",
              borderBottom: "1px solid #c1e5de",
              color: brand.navy,
              fontSize: 18,
              fontWeight: 750,
            }}
          >
            <span>{item}</span>
            <span style={{ color: brand.teal }}>OK</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{
  title: string;
  value: string;
  footer: string;
  accent: string;
  delay: number;
}> = ({ title, value, footer, accent, delay }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        ...appear(frame, delay, delay + 18),
        padding: 26,
        borderRadius: 8,
        background: "rgba(255,255,255,0.96)",
        color: brand.navy,
        width: 305,
        minHeight: 180,
        boxShadow: "0 24px 55px rgba(4, 28, 40, 0.18)",
      }}
    >
      <div
        style={{
          width: 46,
          height: 6,
          borderRadius: 99,
          background: accent,
          marginBottom: 21,
        }}
      />
      <div style={{ color: "#526b74", fontSize: 19, fontWeight: 750 }}>
        {title}
      </div>
      <div
        style={{
          marginTop: 12,
          fontSize: 46,
          lineHeight: 1,
          fontWeight: 950,
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 17,
          color: "#527078",
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 1.22,
        }}
      >
        {footer}
      </div>
    </div>
  );
};

const SceneOne: React.FC = () => {
  const frame = useCurrentFrame();
  const panelX = fit(frame, [15, 45], [160, 0]);
  const imageScale = fit(frame, [0, 120], [1.08, 1]);

  return (
    <SceneShell>
      <Img
        src={staticFile("hero.png")}
        style={{
          position: "absolute",
          right: -130,
          top: -40,
          height: 820,
          opacity: 0.28,
          transform: `scale(${imageScale})`,
          filter: "saturate(0.8) contrast(0.95)",
        }}
      />
      <div style={{ position: "absolute", left: 72, top: 58 }}>
        <LogoLockup />
      </div>
      <div
        style={{
          position: "absolute",
          left: 78,
          top: 212,
          display: "flex",
          flexDirection: "column",
          gap: 27,
          ...appear(frame, 8, 38),
        }}
      >
        <Kicker>When audits are coming</Kicker>
        <BigText maxWidth={790}>Expired kits should not be a surprise.</BigText>
        <Body>
          SafetySight keeps first-aid kit checks moving, visible, and ready.
        </Body>
      </div>
      <div
        style={{
          position: "absolute",
          right: 92 + panelX,
          top: 210,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <StatusPill label="Expired item found late" tone="danger" delay={36} />
        <StatusPill label="Spreadsheet out of date" tone="warning" delay={50} />
        <StatusPill label="Audit records missing" tone="danger" delay={64} />
      </div>
    </SceneShell>
  );
};

const SceneTwo: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell dark={false}>
      <div style={{ position: "absolute", left: 74, top: 60 }}>
        <LogoLockup compact invert />
      </div>
      <div
        style={{
          position: "absolute",
          left: 78,
          top: 190,
          display: "flex",
          flexDirection: "column",
          gap: 28,
          ...appear(frame, 6, 34),
        }}
      >
        <Kicker color={brand.teal}>Scan. Track. Prove.</Kicker>
        <BigText color={brand.navy} maxWidth={715}>
          Kit compliance in seconds.
        </BigText>
        <Body color="#3c5964" maxWidth={650}>
          QR and barcode checks capture items, lot numbers, expiries, and
          evidence instantly.
        </Body>
      </div>
      <PhoneScan />
      <div
        style={{
          position: "absolute",
          right: 86,
          bottom: 56,
          display: "flex",
          gap: 14,
        }}
      >
        {["3 sec checks", "Offline ready", "Evidence logged"].map(
          (label, index) => (
            <div
              key={label}
              style={{
                ...appear(frame, 58 + index * 11, 74 + index * 11),
                padding: "14px 18px",
                borderRadius: 8,
                background: brand.navy,
                color: brand.white,
                fontSize: 18,
                fontWeight: 850,
              }}
            >
              {label}
            </div>
          ),
        )}
      </div>
    </SceneShell>
  );
};

const SceneThree: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell>
      <div style={{ position: "absolute", left: 76, top: 58 }}>
        <LogoLockup compact />
      </div>
      <div
        style={{
          position: "absolute",
          left: 82,
          top: 176,
          display: "flex",
          flexDirection: "column",
          gap: 25,
          ...appear(frame, 6, 32),
        }}
      >
        <Kicker>From one centre to every site</Kicker>
        <BigText maxWidth={790}>Managers see readiness at a glance.</BigText>
        <Body>
          Automated expiry alerts, inventory triggers, and centre health in one
          clear dashboard.
        </Body>
      </div>
      <div
        style={{
          position: "absolute",
          right: 74,
          top: 160,
          display: "grid",
          gridTemplateColumns: "repeat(2, 305px)",
          gap: 20,
        }}
      >
        <DashboardCard
          title="Readiness"
          value="96%"
          footer="Rooms checked this week"
          accent={brand.teal}
          delay={34}
        />
        <DashboardCard
          title="Expiries"
          value="12"
          footer="Items flagged early"
          accent={brand.amber}
          delay={44}
        />
        <DashboardCard
          title="Open tasks"
          value="4"
          footer="Reorders and follow-ups"
          accent={brand.cyan}
          delay={54}
        />
        <DashboardCard
          title="Audit export"
          value="<10s"
          footer="Reports for assessors"
          accent={brand.teal}
          delay={64}
        />
      </div>
    </SceneShell>
  );
};

const SceneFour: React.FC = () => {
  const frame = useCurrentFrame();
  const line = fit(frame, [30, 116], [0, 1]);
  const proof = [
    "Reduce expired item risk",
    "Reduce admin load",
    "Standardise kit checks",
    "Prepare for audits with confidence",
  ];

  return (
    <SceneShell dark={false}>
      <div style={{ position: "absolute", left: 74, top: 58 }}>
        <LogoLockup compact invert />
      </div>
      <div
        style={{
          position: "absolute",
          left: 82,
          top: 170,
          display: "flex",
          flexDirection: "column",
          gap: 25,
          ...appear(frame, 8, 34),
        }}
      >
        <Kicker color={brand.teal}>A safer daily rhythm</Kicker>
        <BigText color={brand.navy} maxWidth={820}>
          Compliance that lasts beyond audit week.
        </BigText>
      </div>
      <div
        style={{
          position: "absolute",
          left: 90,
          bottom: 96,
          width: 930,
          height: 10,
          borderRadius: 99,
          background: "#c8e9e4",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${line * 100}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${brand.teal}, ${brand.cyan})`,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          right: 92,
          top: 190,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {proof.map((item, index) => (
          <div
            key={item}
            style={{
              ...appear(frame, 36 + index * 13, 54 + index * 13),
              display: "flex",
              alignItems: "center",
              gap: 16,
              width: 520,
              padding: "20px 24px",
              borderRadius: 8,
              background: brand.white,
              color: brand.navy,
              boxShadow: "0 16px 48px rgba(7, 27, 44, 0.11)",
              fontSize: 25,
              fontWeight: 850,
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: brand.teal,
                color: brand.white,
                display: "grid",
                placeItems: "center",
                fontSize: 11,
                fontWeight: 950,
              }}
            >
              OK
            </div>
            {item}
          </div>
        ))}
      </div>
    </SceneShell>
  );
};

const SceneFive: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate((frame - 50) % 60, [0, 30, 60], [1, 1.05, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: cubic,
  });

  return (
    <SceneShell>
      <Img
        src={staticFile("safetysight-rectangle.png")}
        style={{
          position: "absolute",
          right: 70,
          top: 76,
          width: 510,
          objectFit: "contain",
          filter: "drop-shadow(0 24px 70px rgba(0,0,0,0.28))",
          ...appear(frame, 24, 54),
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 78,
          top: 118,
          display: "flex",
          flexDirection: "column",
          gap: 28,
          ...appear(frame, 6, 34),
        }}
      >
        <LogoLockup />
        <BigText maxWidth={770}>Ready for every room, kit, and audit?</BigText>
        <Body maxWidth={660}>
          Start with a single centre. Scale across your whole network.
        </Body>
        <div
          style={{
            marginTop: 10,
            transform: `scale(${pulse})`,
            transformOrigin: "left center",
            display: "inline-flex",
            width: "fit-content",
            padding: "21px 29px",
            borderRadius: 8,
            background: brand.teal,
            color: brand.navy,
            fontSize: 28,
            fontWeight: 950,
            boxShadow: `0 20px 60px ${brand.teal}55`,
          }}
        >
          Book a demo at safetysight.net
        </div>
      </div>
    </SceneShell>
  );
};

const SoundlessBeat: React.FC = () => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();
  const progress = fit(frame, [0, 900], [0, 1]);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: width * progress,
        height: 8,
        background: `linear-gradient(90deg, ${brand.teal}, ${brand.cyan})`,
      }}
    />
  );
};

export const SafetySightCommercial = () => {
  return (
    <AbsoluteFill style={{ background: brand.navy }}>
      <Sequence durationInFrames={180}>
        <SceneOne />
      </Sequence>
      <Sequence from={180} durationInFrames={180}>
        <SceneTwo />
      </Sequence>
      <Sequence from={360} durationInFrames={180}>
        <SceneThree />
      </Sequence>
      <Sequence from={540} durationInFrames={180}>
        <SceneFour />
      </Sequence>
      <Sequence from={720} durationInFrames={180}>
        <SceneFive />
      </Sequence>
      <SoundlessBeat />
    </AbsoluteFill>
  );
};
