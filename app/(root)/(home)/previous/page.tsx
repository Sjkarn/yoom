import CallList from '@/components/CallList';

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white mb-5">
      <h1 className="text-3xl font-bold">Previous Calls</h1>

      <CallList type="ended" />
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

export default PreviousPage;
