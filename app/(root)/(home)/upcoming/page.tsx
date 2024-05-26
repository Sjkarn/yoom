import CallList from '@/components/CallList';

const UpcomingPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming Meeting</h1>

      <CallList type="upcoming" />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          fontFamily: 'Footlight MT',
          fontSize: '1rem',
          background: '#252A41',
          textAlign: 'center',
        }}
      >
        <h1>
          Designed by Saurabh Karn & Aditya Prajapati{' '}
          <span style={{ color: 'DodgerBlue' }}>
            (Blink Random Technologies)
          </span>
        </h1>
      </div>
    </section>
  );
};

export default UpcomingPage;
