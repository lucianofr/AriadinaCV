export type Locale = 'pt' | 'es' | 'en';

export interface Translations {
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    role: string;
    cta_contact: string;
    cta_linkedin: string;
    download_cv: string;
    years_exp: string;
    years_exp_label: string;
    projects: string;
    projects_label: string;
    institutions: string;
    institutions_label: string;
  };
  sections: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
  };
  about: {
    paragraph1: string;
    paragraph2: string;
  };
  experience: {
    present: string;
  };
  skills: {
    project_management: string;
    governance: string;
    monitoring: string;
    methodologies: string;
    tools: string;
    languages: string;
  };
  contact: {
    intro: string;
    email_label: string;
    linkedin_label: string;
    location_label: string;
    send_message: string;
  };
  footer: {
    rights: string;
    built_with: string;
  };
}
