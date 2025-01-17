from Evaluator import Evaluator
from ModelExtractor import ModelExtractor
from ModelTraining import ModelTraining
from TrainingDataGenerator import TrainingDataGenerator
from ModelProperties import ModelProperties

from app.base.ProcessManager import ProcessManager


class PipelineBuilder:

    def __init__(self, props: ModelProperties):
        self._props = props

    def create_pipeline(self):
        lang = self._props.lang
        self._props.init_setup()
        iterations = self._props.iterations
        pages = self._props.pages

        return[
            TrainingDataGenerator(lang, pages, self._props, ProcessManager),
            ModelExtractor(lang, self._props, ProcessManager),
            ModelTraining(lang, iterations, self._props, ProcessManager),
            Evaluator(lang, self._props, ProcessManager, default_model_eval = True),
            Evaluator(lang, self._props, ProcessManager, default_model_eval = False)
        ]
