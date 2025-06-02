import { projects } from "../data.js";

// Helper function to check if any design content exists
const hasDesignDocumentation = (process) => {
  return (
    process?.research?.trim() ||
    process?.wireframe?.trim() ||
    process?.userFlow?.trim()
  );
};

const DesignCard = ({ onClose, projectId }) => {
  const project = projects.find((proj) => proj.id === projectId);

  // If no project or no real design content, show fallback UI
  if (!project || !hasDesignDocumentation(project.designProcess)) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6 md:p-8">
        <div className="relative bg-gray-100 text-black rounded-lg shadow-2xl w-full max-w-2xl p-4 sm:p-6 mt-10 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
            aria-label="Close"
          >
            ×
          </button>

          {/* Fallback Message */}
          <div className="text-center py-8">
            <h2 className="text-xl font-semibold">
              Design Process Not Available
            </h2>
            <p className="mt-4">
              This project doesn't have design documentation yet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { research, wireframe, wireframe_img, userFlow, userFlow_img } =
    project.designProcess;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6 md:p-8">
      <div className="relative bg-gray-100 text-black rounded-lg shadow-2xl w-full max-w-2xl p-4 sm:p-6 mt-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>

        {/* Card Header */}
        <div className="flex items-center justify-center mb-6 text-center space-x-2">
          <img src="/cogwheel.png" alt="Cogwheel" className="h-8 sm:h-10" />
          <h1 className="text-2xl sm:text-3xl font-bold">Design Process</h1>
        </div>

        {/* User Research */}
        {research && research.trim() && (
          <>
            <h2 className="text-lg sm:text-xl font-semibold mb-8">
              User Research
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              {research}
            </p>
          </>
        )}

        {/* Wireframes */}
        {wireframe && wireframe.trim() && (
          <>
            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-8">
              Wireframes on Figma
            </h2>
            {wireframe_img && (
              <div className="w-full mb-2">
                <img
                  src={wireframe_img}
                  alt="Figma wireframes"
                  className="w-full h-auto rounded-md shadow-xl"
                />
              </div>
            )}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed mt-8 mb-6">
              {wireframe
                .split(". ")
                .filter(Boolean)
                .map((sentence, index) => (
                  <p
                    key={index}
                    className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3"
                  >
                    {sentence.trim() + (sentence.endsWith(".") ? "" : ".")}
                  </p>
                ))}
            </div>
          </>
        )}

        {/* User Flow */}
        {userFlow_img && userFlow_img.trim() && (
          <>
            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-8">
              User Flow
            </h2>
            {userFlow_img && (
              <div className="w-full mb-2">
                <img
                  src={userFlow_img}
                  alt="User Flow diagram"
                  className="w-full h-auto rounded-md shadow-xl"
                />
              </div>
            )}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {userFlow}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DesignCard;
