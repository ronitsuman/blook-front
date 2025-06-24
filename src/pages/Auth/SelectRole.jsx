import { useNavigate } from 'react-router-dom'

const roles = [
  {
    id: 'spaceOwner',
    title: 'Space Owner',
    description: 'Monetize your space by listing it on BlookMySpace.',
    emoji: '🏢',
    benefits: [
      'Get direct bookings from advertisers',
      'Control availability and pricing',
      'Track campaign usage in your dashboard',
      'Receive secure payments via escrow',
      'Manage your listings with ease',
    ],
  },
  {
    id: 'advertiser',
    title: 'Advertiser',
    description: 'Promote your brand by finding the perfect space.',
    emoji: '📢',
    benefits: [
      'Discover top-rated locations',
      'Launch targeted campaigns',
      'Connect directly with space owners',
      'Track campaign performance',
      'Request vendor services on demand',
    ],
  },
  {
    id: 'vendor',
    title: 'Vendor',
    description: 'Offer services to campaigns that need your skills.',
    emoji: '',
    benefits: [
      'Provide installation, fabrication, and logistics',
      'Apply to campaigns and submit quotes',
      'Upload files & designs via Cloudinary',
      'Get hired and earn securely',
      'Chat directly with advertisers',
    ],
  },
  {
    id: 'agent',
    title: 'Agent',
    description: 'Earn by connecting advertisers with the right space.',
    emoji: '🧑‍💼',
    benefits: [
      'Recommend verified spaces',
      'Get paid per successful deal',
      'Track performance and earnings',
      'Become a trusted Blook agent',
      'Easy to start, no technical skills needed',
    ],
  },
]

export default function SelectRole() {
  const navigate = useNavigate()

  const handleSelect = (role) => {
    navigate(`/signup?role=${role}`)
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Choose Your Role</h1>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
        Select the role that best matches how you want to use BlookMySpace. Each role has a unique benefit and flow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl w-full">
        {roles.map((role) => (
          <div
            key={role.id}
            className="bg-white p-6 rounded-2xl   shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* <div className="text-5xl mb-3">{role.emoji}</div> */}
            <h2 className="text-2xl font-semibold mb-1 bg-blue-100 text-center p-2">{role.title}</h2>
            <p className="text-gray-700 mb-3">{role.description}</p>

            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1 mb-4">
              {role.benefits.map((point, idx) => (
                <li key={idx}>✔️ {point}</li>
              ))}
            </ul>

            <button
              // onClick={()=>{navigate('/signup')}}
              onClick={() => handleSelect(role.id)}
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Continue as {role.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
