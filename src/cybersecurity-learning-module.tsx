import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, AlertTriangle, Lock, Users, CheckCircle, XCircle, Play, Pause } from 'lucide-react';

const CybersecurityModule = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [scenarioChoices, setScenarioChoices] = useState({});
  const [completedSections, setCompletedSections] = useState(new Set());

  const sections = [
    { id: 'intro', title: 'What is Cybersecurity?', icon: Shield },
    { id: 'threats', title: 'Types of Cyber Threats', icon: AlertTriangle },
    { id: 'hygiene', title: 'Cyber Hygiene', icon: Lock },
    { id: 'social', title: 'Social Engineering', icon: Users }
  ];

  const updateProgress = (sectionId, completed = true) => {
    if (completed) {
      setCompletedSections(prev => new Set([...prev, sectionId]));
    }
  };

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleScenarioChoice = (scenarioId, choice) => {
    setScenarioChoices(prev => ({ ...prev, [scenarioId]: choice }));
  };

  const getProgressPercentage = () => {
    return Math.round((completedSections.size / sections.length) * 100);
  };

  // Introduction Section
  const IntroSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Shield className="mr-3" size={32} />
          What is Cybersecurity?
        </h2>
        <p className="text-lg">
          Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
          <div className="text-center">
            <Play size={48} className="mx-auto mb-2 text-blue-600" />
            <p className="text-gray-600">Introduction to Cybersecurity</p>
            <p className="text-sm text-gray-500">(Video would be embedded here)</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Key Components of Cybersecurity:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800">Confidentiality</h4>
            <p className="text-sm text-blue-600">Ensuring information is accessible only to authorized users</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800">Integrity</h4>
            <p className="text-sm text-green-600">Maintaining accuracy and completeness of data</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800">Availability</h4>
            <p className="text-sm text-purple-600">Ensuring systems are accessible when needed</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800">Authentication</h4>
            <p className="text-sm text-orange-600">Verifying the identity of users and systems</p>
          </div>
        </div>
      </div>

      <QuizComponent 
        questions={[
          {
            id: 'intro-q1',
            question: 'What are the three main pillars of cybersecurity known as the CIA Triad?',
            options: [
              'Confidentiality, Integrity, Availability',
              'Control, Identity, Access',
              'Compliance, Investigation, Analysis',
              'Cyber, Information, Assurance'
            ],
            correct: 0
          }
        ]}
        onAnswer={handleQuizAnswer}
        answers={quizAnswers}
      />

      <button 
        onClick={() => updateProgress('intro')}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Mark Section Complete
      </button>
    </div>
  );

  // Threats Section
  const ThreatsSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <AlertTriangle className="mr-3" size={32} />
          Types of Cyber Threats
        </h2>
        <p className="text-lg">
          Understanding different types of cyber threats helps in building effective defenses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-red-700">Malware</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Viruses</li>
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Trojans</li>
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Ransomware</li>
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Spyware</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-orange-700">Network Attacks</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>DDoS Attacks</li>
            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>Man-in-the-Middle</li>
            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>SQL Injection</li>
            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>Cross-Site Scripting</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">Data Breaches</h3>
          <p className="text-sm text-gray-600 mb-3">
            Unauthorized access to confidential data, often resulting in identity theft or financial loss.
          </p>
          <div className="bg-purple-50 p-3 rounded">
            <p className="text-xs text-purple-700">Impact: $4.45M average cost per breach in 2023</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Phishing</h3>
          <p className="text-sm text-gray-600 mb-3">
            Fraudulent attempts to obtain sensitive information by disguising as trustworthy entities.
          </p>
          <div className="bg-blue-50 p-3 rounded">
            <p className="text-xs text-blue-700">83% of organizations experienced phishing attacks in 2022</p>
          </div>
        </div>
      </div>

      <ScenarioComponent 
        scenario={{
          id: 'threat-scenario',
          title: 'Email Security Scenario',
          description: 'You receive an email claiming to be from your bank asking you to verify your account details by clicking a link.',
          choices: [
            { id: 'click', text: 'Click the link and enter your details', feedback: 'Incorrect! This is likely a phishing attempt. Never click suspicious links.' },
            { id: 'ignore', text: 'Delete the email and contact your bank directly', feedback: 'Correct! Always verify suspicious communications through official channels.' },
            { id: 'forward', text: 'Forward the email to colleagues to warn them', feedback: 'Not recommended! This could spread the phishing attempt. Report it to IT instead.' }
          ]
        }}
        onChoice={handleScenarioChoice}
        choices={scenarioChoices}
      />

      <button 
        onClick={() => updateProgress('threats')}
        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
      >
        Mark Section Complete
      </button>
    </div>
  );

  // Hygiene Section
  const HygieneSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Lock className="mr-3" size={32} />
          Cyber Hygiene
        </h2>
        <p className="text-lg">
          Essential practices to maintain your digital security and protect against threats.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Password Security</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-semibold text-green-700">✓ Do:</h4>
            <ul className="text-sm space-y-1">
              <li>• Use unique passwords for each account</li>
              <li>• Include uppercase, lowercase, numbers, symbols</li>
              <li>• Use a password manager</li>
              <li>• Enable two-factor authentication</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-red-700">✗ Don't:</h4>
            <ul className="text-sm space-y-1">
              <li>• Use personal information in passwords</li>
              <li>• Reuse passwords across accounts</li>
              <li>• Share passwords with others</li>
              <li>• Use dictionary words</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold mb-2 text-blue-700">Software Updates</h4>
          <p className="text-sm text-gray-600">Keep all software and systems updated with latest security patches.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold mb-2 text-purple-700">Secure Browsing</h4>
          <p className="text-sm text-gray-600">Use HTTPS websites, avoid suspicious downloads, and use reputable browsers.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold mb-2 text-orange-700">Data Backup</h4>
          <p className="text-sm text-gray-600">Regularly backup important data using the 3-2-1 backup rule.</p>
        </div>
      </div>

      <QuizComponent 
        questions={[
          {
            id: 'hygiene-q1',
            question: 'What is the recommended minimum length for a strong password?',
            options: ['6 characters', '8 characters', '12 characters', '16 characters'],
            correct: 2
          },
          {
            id: 'hygiene-q2',
            question: 'What does the 3-2-1 backup rule recommend?',
            options: [
              '3 copies of data, 2 different media types, 1 offsite',
              '3 passwords, 2 devices, 1 backup',
              '3 security layers, 2 authentication factors, 1 firewall',
              '3 updates per month, 2 antivirus programs, 1 VPN'
            ],
            correct: 0
          }
        ]}
        onAnswer={handleQuizAnswer}
        answers={quizAnswers}
      />

      <button 
        onClick={() => updateProgress('hygiene')}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Mark Section Complete
      </button>
    </div>
  );

  // Social Engineering Section
  const SocialSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Users className="mr-3" size={32} />
          Social Engineering
        </h2>
        <p className="text-lg">
          Psychological manipulation techniques used to trick people into divulging confidential information.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Common Social Engineering Techniques</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-red-700">Pretexting</h4>
            <p className="text-sm text-gray-600">Creating a fabricated scenario to engage with a victim and steal their information.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-orange-700">Baiting</h4>
            <p className="text-sm text-gray-600">Offering something enticing to spark curiosity and prompt victims to take the bait.</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-semibold text-yellow-700">Quid Pro Quo</h4>
            <p className="text-sm text-gray-600">Offering a service or benefit in exchange for information or access.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-700">Tailgating</h4>
            <p className="text-sm text-gray-600">Following someone into a restricted area without proper authorization.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Warning Signs of Social Engineering:</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          <div>• Urgency and pressure tactics</div>
          <div>• Requests for sensitive information</div>
          <div>• Unsolicited offers or help</div>
          <div>• Emotional manipulation</div>
          <div>• Requests to bypass security</div>
          <div>• Too good to be true offers</div>
        </div>
      </div>

      <ScenarioComponent 
        scenario={{
          id: 'social-scenario',
          title: 'Social Engineering Scenario',
          description: 'Someone calls claiming to be from IT support, saying they need your password to fix a critical security issue on your account.',
          choices: [
            { id: 'give', text: 'Provide your password to help resolve the issue', feedback: 'Incorrect! Legitimate IT will never ask for your password over the phone.' },
            { id: 'verify', text: 'Ask for their employee ID and call IT to verify', feedback: 'Correct! Always verify the identity of anyone requesting sensitive information.' },
            { id: 'reset', text: 'Offer to reset your password yourself instead', feedback: 'Good approach! Taking control of the situation is a smart defensive move.' }
          ]
        }}
        onChoice={handleScenarioChoice}
        choices={scenarioChoices}
      />

      <QuizComponent 
        questions={[
          {
            id: 'social-q1',
            question: 'Which of the following is NOT a common social engineering technique?',
            options: ['Phishing', 'Pretexting', 'Encryption', 'Baiting'],
            correct: 2
          }
        ]}
        onAnswer={handleQuizAnswer}
        answers={quizAnswers}
      />

      <button 
        onClick={() => updateProgress('social')}
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Mark Section Complete
      </button>
    </div>
  );

  // Quiz Component
  const QuizComponent = ({ questions, onAnswer, answers }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
      <h3 className="text-lg font-semibold mb-4 text-blue-700">Knowledge Check</h3>
      {questions.map((q, qIndex) => (
        <div key={q.id} className="mb-4">
          <p className="font-medium mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, oIndex) => (
              <label key={oIndex} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name={q.id}
                  value={oIndex}
                  onChange={() => onAnswer(q.id, oIndex)}
                  className="text-blue-600"
                />
                <span className="text-sm">{option}</span>
                {answers[q.id] !== undefined && (
                  <span className="ml-2">
                    {answers[q.id] === oIndex && answers[q.id] === q.correct ? 
                      <CheckCircle size={16} className="text-green-500" /> :
                      answers[q.id] === oIndex && answers[q.id] !== q.correct ?
                      <XCircle size={16} className="text-red-500" /> : null
                    }
                  </span>
                )}
              </label>
            ))}
          </div>
          {answers[q.id] !== undefined && (
            <div className={`mt-2 p-2 rounded text-sm ${
              answers[q.id] === q.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {answers[q.id] === q.correct ? '✓ Correct!' : `✗ Incorrect. The correct answer is: ${q.options[q.correct]}`}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  // Scenario Component
  const ScenarioComponent = ({ scenario, onChoice, choices }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
      <h3 className="text-lg font-semibold mb-2 text-purple-700">Interactive Scenario</h3>
      <h4 className="font-medium mb-3">{scenario.title}</h4>
      <p className="text-gray-700 mb-4">{scenario.description}</p>
      <div className="space-y-2">
        {scenario.choices.map((choice) => (
          <div key={choice.id}>
            <button
              onClick={() => onChoice(scenario.id, choice.id)}
              className={`w-full text-left p-3 rounded border transition-colors ${
                choices[scenario.id] === choice.id ? 'bg-purple-100 border-purple-300' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              }`}
            >
              {choice.text}
            </button>
            {choices[scenario.id] === choice.id && (
              <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded text-sm">
                <strong>Feedback:</strong> {choice.feedback}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const sectionComponents = [IntroSection, ThreatsSection, HygieneSection, SocialSection];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <Shield className="mr-2 text-blue-600" />
              Cybersecurity Learning Module
            </h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Progress: {getProgressPercentage()}%
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage()}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-24">
              <h2 className="font-semibold mb-4 text-gray-800">Course Navigation</h2>
              <nav className="space-y-2">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setCurrentSection(index)}
                      className={`w-full text-left p-3 rounded-lg flex items-center space-x-3 transition-colors ${
                        currentSection === index 
                          ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Icon size={20} />
                      <div>
                        <div className="font-medium text-sm">{section.title}</div>
                        {completedSections.has(section.id) && (
                          <CheckCircle size={16} className="text-green-500 mt-1" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                {React.createElement(sectionComponents[currentSection])}
              </div>

              {/* Navigation Footer */}
              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                  <span>Previous</span>
                </button>

                <span className="text-sm text-gray-600">
                  {currentSection + 1} of {sections.length}
                </span>

                <button
                  onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                  disabled={currentSection === sections.length - 1}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Completion Certificate */}
            {completedSections.size === sections.length && (
              <div className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg text-center">
                <CheckCircle size={48} className="mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
                <p className="text-lg">You have successfully completed the Cybersecurity Learning Module</p>
                <p className="text-sm mt-2 opacity-90">You are now better equipped to protect yourself and your organization from cyber threats.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityModule;
