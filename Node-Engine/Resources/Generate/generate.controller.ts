import { Request, Response } from 'express';
import { GenerateValidator } from './generate.validator';
import { GenerativeAIModule } from './model';

const generateValidator = new GenerateValidator
const generativeAIModule = new GenerativeAIModule

const healthKeywords: string[] = [
    'food', 'nutrition', 'diet', 'exercise', 'physical activity', 'mental health',
    'health', 'wellness', 'fitness', 'nutrition', 'diet', 'exercise',
    'physical activity', 'mental health', 'emotional health', 'spiritual health',
    'social health', 'environmental health', 'occupational health', 'financial health',
    'public health', 'global health', 'community health', 'personal health',
    'health promotion', 'disease prevention', 'health education', 'health literacy',
    'health behavior', 'health psychology', 'health sociology', 'health communication',
    'health information', 'health technology', 'health policy', 'healthcare',
    'rare disease', 'chronic condition', 'medical condition', 'health issue',
    'symptom', 'treatment', 'medical diagnosis', 'medical test', 'genetic disorder',
    'autoimmune disease', 'neurological disorder', 'cardiovascular disease', 'respiratory illness',
    'mental health', 'psychiatric disorder', 'infectious disease', 'cancer', 'oncology',
    'endocrine disorder', 'metabolic disorder', 'developmental disorder', 'gastrointestinal disorder',
    'musculoskeletal disorder', 'hematologic disorder', 'skin condition', 'dermatology',
    'ophthalmologic disorder', 'ear, nose, and throat disorder', 'neonatal disorder', 'prenatal disorder',
    'reproductive disorder', 'urological disorder', 'renal disorder', 'liver disorder', 'hepatology',
    'pancreatic disorder', 'gynecological disorder', 'obstetric disorder', 'fertility disorder',
    'sexual health', 'sexually transmitted infection', 'contraception', 'pregnancy complication',
    'childhood disorder', 'pediatrics', 'geriatric disorder', 'senior health', 'aging',
    'nutrition', 'dietary disorder', 'eating disorder', 'food allergy', 'food intolerance',
    'allergy', 'immunodeficiency', 'autoinflammatory disorder', 'transplantation',
    'cognitive disorder', 'neurodevelopmental disorder', 'learning disability', 'attention deficit disorder',
    'autism spectrum disorder', 'intellectual disability', 'physical disability', 'mobility impairment',
    'hearing loss', 'visual impairment', 'speech disorder', 'communication disorder',
    'psychological disorder', 'mood disorder', 'anxiety disorder', 'depressive disorder',
    'bipolar disorder', 'psychosis', 'personality disorder', 'eating disorder', 'sleep disorder',
    'substance use disorder', 'addiction', 'alcoholism', 'drug abuse', 'tobacco dependence',
    'medical treatment', 'surgery', 'medication', 'drug therapy', 'pharmacology',
    'rehabilitation', 'physical therapy', 'occupational therapy', 'speech therapy',
    'alternative medicine', 'complementary medicine', 'integrative medicine', 'holistic health',
    'mental health counseling', 'psychotherapy', 'cognitive behavioral therapy', 'psychoanalysis',
    'group therapy', 'support group', 'palliative care', 'hospice care', 'end-of-life care',
    'pain management', 'chronic pain', 'acute pain', 'palliative medicine', 'terminal illness',
    'hospice', 'nursing care', 'healthcare professional', 'medical specialist', 'primary care',
    'specialist care', 'emergency care', 'urgent care', 'hospitalization', 'outpatient care',
    'inpatient care', 'home healthcare', 'telemedicine', 'virtual care', 'remote consultation',
    'preventive care', 'screening', 'health promotion', 'health education', 'disease prevention',
    'vaccination', 'immunization', 'public health', 'global health', 'population health',
    'epidemiology', 'biostatistics', 'health policy', 'healthcare system', 'health insurance',
    'healthcare financing', 'healthcare administration', 'health informatics', 'medical research',
    'clinical research', 'biomedical research', 'translational research', 'evidence-based medicine',
    'pharmaceutical research', 'biotechnology', 'genetic research', 'personalized medicine',
    'precision medicine', 'regenerative medicine', 'stem cell therapy', 'gene therapy',
    'nanomedicine', 'artificial intelligence in healthcare', 'machine learning in healthcare',
    'medical imaging', 'diagnostic imaging', 'radiology', 'ultrasound', 'magnetic resonance imaging',
    'computed tomography', 'positron emission tomography', 'nuclear medicine', 'laboratory medicine',
    'clinical pathology', 'medical laboratory', 'histopathology', 'cytopathology', 'hematology',
    'clinical chemistry', 'microbiology', 'virology', 'parasitology', 'immunology',
    'genetic testing', 'molecular diagnostics', 'point-of-care testing', 'telepathology',
    'telecardiology', 'teledermatology', 'teleophthalmology', 'teleaudiology', 'telepsychiatry',
    'telehealth', 'digital health', 'health information technology', 'electronic health record',
    'health data analytics', 'healthcare interoperability', 'medical coding', 'healthcare compliance',
    'patient safety', 'quality improvement', 'healthcare accreditation', 'clinical governance',
    'healthcare ethics', 'medical law', 'patient advocacy', 'healthcare innovation',
    'health technology assessment', 'health economics', 'health behavior', 'health psychology',
    'medical sociology', 'health communication', 'health literacy', 'patient education',
    'health coaching', 'wellness coaching', 'population health management', 'disease management',
    'health disparities', 'social determinants of health', 'environmental health', 'occupational health',
    'occupational safety', 'workplace wellness', 'public health policy', 'community health',
    'global health governance', 'healthcare regulation', 'healthcare reform', 'healthcare delivery',
    'healthcare access', 'healthcare equity', 'healthcare disparities', 'universal health coverage',
    'healthcare quality', 'healthcare safety', 'healthcare efficiency', 'healthcare cost',
    'healthcare waste', 'healthcare innovation', 'healthcare technology', 'telemedicine',
    'digital health', 'health information exchange', 'telehealth', 'wearable health technology',
    'personal health record', 'patient portal', 'mHealth', 'eHealth', 'telemonitoring',
    'remote patient monitoring', 'home health monitoring', 'healthcare data security',
    'healthcare privacy', 'healthcare regulation', 'HIPAA compliance', 'GDPR compliance',
    'FDA regulation', 'clinical trial regulation', 'healthcare fraud', 'healthcare ethics',
    'patient rights', 'patient advocacy', 'medical malpractice', 'medical negligence',
    'medical errors', 'adverse events', 'patient safety', 'hospital-acquired infection',
    'medication error', 'surgical error', 'misdiagnosis', 'delayed diagnosis', 'failure to diagnose',
    'healthcare-associated condition', 'patient satisfaction', 'patient experience',
    'healthcare workforce', 'physician', 'nurse', 'surgeon', 'pharmacist', 'medical assistant',
    'physical therapist', 'occupational therapist', 'speech therapist', 'registered dietitian',
    'psychologist', 'psychiatrist', 'social worker', 'healthcare administrator',
    'healthcare executive', 'healthcare manager', 'healthcare leader', 'healthcare educator',
    'healthcare researcher', 'public health professional', 'epidemiologist', 'biostatistician',
    'health economist', 'health informatician', 'clinical informatician', 'health IT specialist',
    'health data analyst', 'healthcare consultant', 'healthcare lobbyist', 'healthcare advocate',
    'patient representative', 'healthcare volunteer', 'medical student', 'nursing student',
    'allied health student', 'healthcare training', 'medical education', 'nursing education',
    'allied health education', 'continuing medical education', 'healthcare certification',
    'medical licensing', 'nursing licensing', 'healthcare accreditation', 'healthcare credentialing',
    'healthcare regulation', 'healthcare policy', 'healthcare law', 'healthcare compliance',
    'healthcare ethics', 'healthcare finance', 'healthcare economics', 'healthcare management',
    'healthcare administration', 'healthcare leadership', 'healthcare governance',
    'healthcare decision-making', 'healthcare strategy', 'healthcare planning', 'healthcare innovation',
    'healthcare transformation', 'healthcare sustainability', 'healthcare globalization',
    'healthcare collaboration', 'healthcare integration', 'healthcare coordination',
    'healthcare communication', 'healthcare negotiation', 'healthcare partnership',
    'healthcare teamwork', 'healthcare culture', 'healthcare diversity', 'healthcare inclusion',
    'healthcare equity', 'healthcare access', 'healthcare affordability', 'healthcare insurance',
    'healthcare payment', 'healthcare reimbursement', 'healthcare finance', 'healthcare investment',
    'healthcare economics', 'healthcare value', 'healthcare cost-effectiveness', 'healthcare efficiency',
    'healthcare waste', 'healthcare transparency', 'healthcare accountability', 'healthcare regulation',
    'healthcare reform', 'healthcare advocacy', 'patient empowerment', 'patient engagement',
    'patient-centered care', 'patient safety', 'patient education', 'patient communication',
    'patient satisfaction', 'patient experience', 'patient rights', 'patient privacy',
    'patient confidentiality', 'patient autonomy', 'patient decision-making', 'patient advocacy',
    'patient support', 'patient navigation', 'patient care', 'caregiving', 'care coordination',
    'care management', 'care planning', 'care delivery', 'care transition', 'care integration',
    'care collaboration', 'care continuity', 'care quality', 'care safety', 'care efficiency',
    'care effectiveness', 'care equity', 'care access', 'care affordability', 'care innovation',
    'care transformation', 'care sustainability', 'care globalization', 'care partnership',
    'care teamwork', 'care culture', 'care diversity', 'care inclusion', 'care empowerment',
    'care engagement', 'care satisfaction', 'care experience', 'care rights', 'care privacy',
    'care transparency', 'care accountability', 'care regulation', 'care reform', 'care advocacy',
    'care leadership', 'care decision-making', 'care strategy', 'care planning', 'care innovation',
    'care collaboration', 'care integration', 'care coordination', 'care communication',
    'care negotiation', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care equity', 'care access', 'care affordability', 'care quality',
    'care safety', 'care efficiency', 'care effectiveness', 'care value', 'care cost-effectiveness',
    'care waste', 'care transparency', 'care accountability', 'care regulation', 'care reform',
    'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care confidentiality', 'care autonomy', 'care decision-making',
    'care support', 'care navigation', 'care delivery', 'care coordination', 'care management',
    'care planning', 'care integration', 'care collaboration', 'care continuity', 'care quality',
    'care safety', 'care efficiency', 'care effectiveness', 'care equity', 'care access',
    'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
    'care management', 'care planning', 'care integration', 'care collaboration', 'care continuity',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care equity',
    'care access', 'care affordability', 'care innovation', 'care transformation', 'care sustainability',
    'care globalization', 'care partnership', 'care teamwork', 'care culture', 'care diversity',
    'care inclusion', 'care empowerment', 'care engagement', 'care satisfaction', 'care experience',
    'care rights', 'care privacy', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care leadership', 'care decision-making', 'care strategy',
    'care planning', 'care innovation', 'care collaboration', 'care integration', 'care coordination',
    'care communication', 'care negotiation', 'care partnership', 'care teamwork', 'care culture',
    'care diversity', 'care inclusion', 'care equity', 'care access', 'care affordability',
    'care quality', 'care safety', 'care efficiency', 'care effectiveness', 'care value',
    'care cost-effectiveness', 'care waste', 'care transparency', 'care accountability', 'care regulation',
    'care reform', 'care advocacy', 'care empowerment', 'care engagement', 'care satisfaction',
    'care experience', 'care rights', 'care privacy', 'care confidentiality', 'care autonomy',
    'care decision-making', 'care support', 'care navigation', 'care delivery', 'care coordination',
]

export function isHealthRelated(input: string): boolean {
    const lowercaseInput = input.toLowerCase();
    for (const keyword of healthKeywords) {
        if (lowercaseInput.includes(keyword)) {
            return true;
        }
    }
    return false;
}

interface DiseaseFacts {
    [disease: string]: {
        fact: string;
        tip: string;
    };
}





export class GenerateController {
    public async GenerateAnswersToQuestionsFromUsersWithImages (req: Request, res:Response) {
        try {
            const data = req.body
            const ValidatedBody = await generateValidator.ValidateGenerateWithImage(data)
            if (ValidatedBody.error) {
                return res.status(400).json({
                    status: 400,
                    message: ValidatedBody.error.details[0].message
                })
            }
            const getAnswers = await generativeAIModule.acceptPromptAndImagesAndGenerateContent(data.prompt, data.images)
            if (!getAnswers) {
                return res.status(500).json({
                    status: 500,
                    message: "Error generating answers!"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Answers generated successfully!",
                data: getAnswers
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }

    public async GenerateQuestionsForUsersWithoutImages (req: Request, res:Response) {
        try {
            const data = req.body
            const ValidatedBody = await generateValidator.ValidateGenerateWithPromptOnly(data)
            if (ValidatedBody.error) {
                return res.status(400).json({
                    status: 400,
                    message: ValidatedBody.error.details[0].message
                })
            }
            const isHealthRelatedPrompt = isHealthRelated(data.prompt);
            console.log(isHealthRelatedPrompt)
            if (!isHealthRelatedPrompt) {
                return res.status(400).json({
                    status: 400,
                    message: "Prompt is not health-related!"
                });
            }
            const getAnswers = await generativeAIModule.acceptPromptAndGenerateContent(`${data.prompt}, not more thatn 50 words`)
            if (!getAnswers) {
                return res.status(500).json({
                    status: 500,
                    message: "Error generating answers!"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Answers generated successfully!",
                data: getAnswers
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
    
    public async generateFactsAboutEachDisease(req: Request, res: Response) {
        try {
            const diseases = [
                'cancer', 
                // 'diabetes', 'hypertension', 'asthma', 'arthritis', 'osteoporosis',
                // 'alzheimer', 'parkinson', 'stroke', 'heart disease', 'kidney disease', 'liver disease',
                // 'lung disease', 'infectious disease', 'autoimmune disease', 'neurological disease',
                // 'mental disorder', 'psychiatric disorder', 'substance use disorder', 'eating disorder',
                // 'sleep disorder', 'sexual disorder', 'reproductive disorder', 'urological disorder',
                // 'gastrointestinal disorder', 'hepatobiliary disorder', 'endocrine disorder',
                // 'hematological disorder', 'dermatological disorder', 'ophthalmological disorder',
                // 'otolaryngological disorder', 'orthopedic disorder', 'rheumatological disorder',
                // 'cardiovascular disorder', 'respiratory disorder', 'neurological disorder',
                // 'psychiatric disorder', 'gynecological disorder', 'obstetric disorder',
                // 'pediatric disorder', 'geriatric disorder', 'oncological disorder', 'infectious disorder',
                // 'autoimmune disorder', 'neurodevelopmental disorder', 'mental disorder', 'psychological disorder',
                // 'substance use disorder', 'eating disorder', 'sleep disorder', 'sexual disorder',
                // 'reproductive disorder', 'urological disorder', 'gastrointestinal disorder',
                // 'hepatobiliary disorder', 'endocrine disorder', 'hematological disorder', 'dermatological disorder',
                // 'ophthalmological disorder', 'otolaryngological disorder', 'orthopedic disorder',
                // 'rheumatological disorder', 'cardiovascular disorder', 'respiratory disorder',
                // 'neurological disorder', 'psychiatric disorder', 'gynecological disorder', 'obstetric disorder',
                // 'pediatric disorder', 'geriatric disorder', 'oncological disorder', 'infectious disorder',
                // 'autoimmune disorder', 'neurodevelopmental disorder', 'mental disorder', 'psychological disorder',
                // 'substance use disorder', 'eating disorder', 'sleep disorder', 'sexual disorder',
                // 'reproductive disorder', 'urological disorder', 'gastrointestinal disorder',
                // 'hepatobiliary disorder', 'endocrine disorder', 'hematological disorder', 'dermatological disorder',
                // 'ophthalmological disorder', 'otolaryngological disorder', 'orthopedic disorder',
                // 'rheumatological disorder', 'cardiovascular disorder'
            ];
    
            const factsAboutDiseases: DiseaseFacts = {};

            console.log(diseases)
    
            for (const disease of diseases) {
                const facts = await generativeAIModule.acceptPromptAndGenerateContent(`A Medical fact about ${disease}, just 15 words`) as string
                console.log(facts)
                const tips = await generativeAIModule.acceptPromptAndGenerateContent(`Tips for managing ${disease}, just 3`) as string
                console.log(tips)
                factsAboutDiseases[disease] = { fact: facts, tip: tips };
            }
    
            return res.status(200).json({
                status: 200,
                message: "Facts generated successfully!",
                factsAboutDiseases
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error
            });
        }
    };
    
    
}