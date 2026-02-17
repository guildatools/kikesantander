export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Welcome to Kikesantander
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#666' }}>
        Project repository by guildatools
      </p>
    </div>
  );
}
