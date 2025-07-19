
// Due to the complexity and length of this form with multiple sections, fields, uploads, and validations,
// it's best to split this into logical components: Basic Info, Branding Options, Heat Mapping, Bank Details, etc.
// This modular approach will ensure maintainability and scalability of the codebase.

import ListYourSpaceForm from "../components/features/ListYourSpaceForm";

export default function ListYourSpace() {
  return (
    <>
    <section className="bg-white py-20 px-4 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">List Your Space</h2>
        <p className="text-gray-600 mt-2 mb-10 text-base md:text-lg">
          A complete form with all required details will appear here, including:
        </p>
        <ul className="text-left text-blue-900 font-medium list-disc list-inside leading-8">
          <li>📋 Basic Contact & Space Info</li>
          <li>📐 Space Size, Demographics</li>
          <li>🧠 Branding Zones, Types, and Pricing</li>
          <li>📷 Photos Upload + Camera Info</li>
          <li>📊 Heat Mapping Trial Preferences</li>
          <li>🏦 Bank Details & Compliance Uploads</li>
          <li>📄 Terms Agreement Checkboxes</li>
        </ul>
        <p className="text-sm text-gray-500 mt-8">
          Modular form components coming next </p>
          
      </div>
     

    </section>
    <ListYourSpaceForm/>
    
    </>
  )
}
